import consumeCache from '@/core/actions/context/consumers/consumeCache';
import consumeId from '@/core/actions/context/consumers/consumeId';
import consumeType from '@/core/actions/context/consumers/consumeType';
import { Action, ConsumeCache, ConsumeId, ConsumeInclude, ConsumeModel, ConsumeType } from '@/core/actions/types';
import { Model, ModelInstance } from '@/core/model/types';
import loaded from '@/core/model/utilities/loaded';
import { Awaitable, isNil } from '@/utilities';

export type CachedUsingData<I extends ModelInstance> = {
  instance: I;
};

export default function cachedUsing<
  C extends {},
  M extends Model,
  I extends InstanceType<M>,
  ND,
>(transform: (data: CachedUsingData<I>) => Awaitable<ND>) {
  return async (
    action: Action<C & ConsumeCache & ConsumeModel<M> & ConsumeInclude & ConsumeType & ConsumeId>,
  ) => {
    const context = await action.useContext();
    const instance = await consumeCache(context)
      .find(consumeType(context), consumeId(context));
    if (isNil(instance) || !loaded(instance, context.include ?? [])) {
      return null;
    }

    return transform({ instance });
  };
}
