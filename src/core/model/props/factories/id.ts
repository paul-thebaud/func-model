import { ModelIdRaw, ModelIdType, ModelPropRaw } from '@/core/model/types';
import { Transform } from '@/core/transformers/types';

export type IdOptions<T> = Omit<ModelPropRaw<T>, 'readOnly' | 'sync'> & {
  transformer?: Transform<T | null> | undefined;
};

export default function id<T extends ModelIdType | null = ModelIdType>(
  config: IdOptions<T> | Transform<T | null> = {},
): ModelIdRaw<T, false> {
  return typeof config === 'function' || ('serialize' in config && 'deserialize' in config)
    ? { $MODEL_TYPE: 'id', transformer: config }
    : { $MODEL_TYPE: 'id', ...config };
}