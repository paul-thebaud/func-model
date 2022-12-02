import type { ActionContext, ActionHooks, ContextConsumer, ContextEnhancer } from '@/core/actions/types';
import sequentialTransform from '@/core/utilities/sequentialTransform';

export default class Action<C extends ActionContext> {
  private $enhancementsQueue: ContextEnhancer<any, any>[];

  private $context: C;

  private $hooks: ActionHooks<any>;

  private $hooksEnabled: boolean;

  public constructor() {
    this.$enhancementsQueue = [];
    this.$context = {} as C;
    this.$hooks = {
      onRunning: [],
      onSuccess: [],
      onError: [],
      onFinally: [],
    };
    this.$hooksEnabled = true;
  }

  public hook<K extends keyof ActionHooks<C>>(
    hook: K,
    callback: ActionHooks<C>[K][number],
  ) {
    return this.hooks(hook, [
      ...this.$hooks[hook],
      callback,
    ] as ActionHooks<C>[K]);
  }

  public hooks<K extends keyof ActionHooks<C>>(
    hook: K,
    callbacks: ActionHooks<C>[K],
  ) {
    this.$hooks[hook] = callbacks;

    return this;
  }

  public withHooks() {
    this.$hooksEnabled = true;

    return this;
  }

  public withoutHooks() {
    this.$hooksEnabled = false;

    return this;
  }

  public get context() {
    return this.$context;
  }

  public async getContext() {
    await this.dequeueEnhancements();

    return this.$context;
  }

  public setContext<NC extends ActionContext>(newContext: NC): Action<NC> {
    this.$context = newContext as any;

    return this as any;
  }

  public use<NC extends ActionContext = C>(
    enhancer: ContextEnhancer<C, NC>,
  ): Action<NC> {
    this.$enhancementsQueue.push(enhancer);

    return this as any;
  }

  public async run<NR>(consumer: ContextConsumer<C, NR>): Promise<Awaited<NR>> {
    const context = await this.getContext();

    // Some enhancements might disable hooks, so store the hooks state only
    // after dequeuing all.
    const hooksEnabled = this.$hooksEnabled;

    await this.runHooks('onRunning', { context });

    try {
      // Context consumer might use other context consumers, so we must disable
      // hooks at this point to avoid multiple hooks runs.
      if (hooksEnabled) {
        this.withoutHooks();
      }

      const result = await consumer(this);

      if (hooksEnabled) {
        this.withHooks();
      }

      await this.runHooks('onSuccess', { context, result });

      return result;
    } catch (error) {
      if (hooksEnabled) {
        this.withHooks();
      }

      await this.runHooks('onError', { context, error });

      throw error;
    } finally {
      await this.runHooks('onFinally', { context });
    }
  }

  private async runHooks<K extends keyof ActionHooks<C>>(
    hook: K,
    event: Parameters<ActionHooks<C>[K][number]>[0],
  ) {
    if (!this.$hooksEnabled) {
      return;
    }

    await sequentialTransform(
      this.$hooks[hook].map((callback) => async () => {
        await callback(event as any);
      }),
    );
  }

  private async dequeueEnhancements() {
    const enhancements = this.$enhancementsQueue.map((e) => async () => {
      await e(this);

      // Any enhancement might push other enhancement in the queue,
      // so we must process those too.
      await this.dequeueEnhancements();
    });

    this.$enhancementsQueue = [];

    await sequentialTransform(enhancements);
  }
}
