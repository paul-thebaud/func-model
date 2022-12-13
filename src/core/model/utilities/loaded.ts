import isInstance from '@/core/model/guards/isInstance';
import isRelationDef from '@/core/model/guards/isRelationDef';
import { ModelDefinition, ModelInstance, ModelRelationDotKey } from '@/core/model/types';
import wrap from '@/core/utilities/wrap';
import { Arrayable } from '@/core/utilities/types';

export default function loaded<S extends ModelDefinition>(
  instance: ModelInstance<S>,
  relations: Arrayable<ModelRelationDotKey<S>>,
): boolean {
  return wrap(relations).every((key) => {
    const [localKey, ...relatedKeys] = key.split('.');
    const def = instance.constructor.$schema[localKey];
    if (!isRelationDef(def)) {
      return false;
    }

    if (!instance.$loaded[localKey]) {
      return false;
    }

    const relatedKey = relatedKeys.join('.');
    if (!relatedKey) {
      return true;
    }

    const related = instance[localKey];
    if (Array.isArray(related)) {
      return related.every((r) => loaded<any>(r, relatedKey));
    }

    if (isInstance(related)) {
      return loaded<any>(related, relatedKey);
    }

    return true;
  });
}