import { ConsumeDeserializer, ConsumeModel } from '@/core/actions/types';
import { ModelSchemaRaw } from '@/core/model/types';

export default function toManyInstances<D, S extends ModelSchemaRaw, I>(
  context: ConsumeDeserializer<D> & ConsumeModel<S, I>,
  data: D,
) {
  return context.deserializer.deserializeMany(
    context,
    data,
  ) as Promise<I[]>;
}