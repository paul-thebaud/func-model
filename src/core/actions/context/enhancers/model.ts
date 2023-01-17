import context from '@/core/actions/context/enhancers/context';
import target from '@/core/actions/context/enhancers/target';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { Action, ActionParsedExtension, ConsumeModel, ConsumeType } from '@/core/actions/types';
import { Model, ModelInstance } from '@/core/model/types';

/**
 * Target the given model.
 * Use its type and other applicable model's context.
 *
 * @param modelToUse
 *
 * @category Enhancers
 */
export default function model<
  C extends {},
  D extends {},
  I extends ModelInstance<D>,
  M extends Model<D, I>,
>(modelToUse: M) {
  return (action: Action<C>) => action
    .use(target<D, I, M>(modelToUse))
    .use(context({
      type: modelToUse.$config.type,
      // TODO Should baseURL be here?
      baseURL: modelToUse.$config.baseURL,
    }));
}

type ModelEnhancerExtension = ActionParsedExtension<{
  model<C extends {}, E extends {}, M extends Model>(
    this: Action<C, E>,
    model: M,
  ): Action<C & ConsumeModel<M> & ConsumeType, E>;
}>;

model.extension = makeEnhancersExtension({ model }) as ModelEnhancerExtension;
