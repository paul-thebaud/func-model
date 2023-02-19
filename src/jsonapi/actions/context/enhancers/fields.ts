import { Action, ConsumeModel, Model, ModelKey } from '@/core';
import consumeModel from '@/core/actions/context/consumers/consumeModel';
import fieldsFor from '@/jsonapi/actions/context/enhancers/fieldsFor';
import { ArrayableVariadic } from '@/utilities';

/**
 * [Select the given JSON:API fieldsets](https://jsonapi.org/format/#fetching-sparse-fieldsets)
 * for the current context's model.
 * The new fieldsets will be merged with the previous ones.
 *
 * @param fieldset
 *
 * @category Enhancers
 */
export default function fields<C extends {}, M extends Model>(
  ...fieldset: ArrayableVariadic<ModelKey<M>>
) {
  return async (action: Action<C & ConsumeModel<M>>) => {
    const model = consumeModel(await action.useContext());

    return action.use(fieldsFor(model, ...fieldset));
  };
}
