import consumeContext from '@/core/actions/context/consumers/consumeContext';
import { ConsumeInstance } from '@/core/actions/types';
import { ModelInstance } from '@/core/model/types';

export default function consumeInstance<I extends ModelInstance, D = never>(
  context: Partial<ConsumeInstance<I>>,
  defaultValue?: D,
) {
  return consumeContext(context, 'instance', [
    'create',
    'update',
    'save',
    'destroy',
    'instance',
  ], defaultValue);
}
