import { ModelId } from '@foscia/core/model/types';
import { isNil } from '@foscia/shared';

export default function isIdDef(
  value: unknown,
): value is ModelId<any> {
  return !isNil(value) && typeof value === 'object' && (value as any).$MODEL_TYPE === 'id';
}
