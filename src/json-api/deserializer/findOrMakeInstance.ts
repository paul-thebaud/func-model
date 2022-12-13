import { ActionContext, FuncModelError, InstancesCacheI, isInstance, Model, ModelInstance, ModelsStoreI } from '@/core';
import isNil from '@/core/utilities/isNil';
import { JsonApiDeserializationData } from '@/json-api/deserializer/prepareDeserializationData';
import { NewJsonApiResource } from '@/json-api/types';

export default async function findOrMakeInstance(
  context: ActionContext & { cache?: InstancesCacheI; store?: ModelsStoreI; model?: Model; },
  resource: NewJsonApiResource,
  deserializationData: JsonApiDeserializationData,
) {
  let instance: ModelInstance | undefined;

  if (!isNil(resource.id)) {
    if (isInstance(context.instance) && context.instance.id === resource.id) {
      instance = context.instance;
    } else if (context.cache && !isNil(resource.id)) {
      const cachedInstance = await context.cache.find(resource.type, resource.id);
      if (cachedInstance) {
        instance = cachedInstance;
      }
    }
  }

  if (!instance) {
    if (context.store) {
      const ModelClass = await context.store.modelFor(resource.type);

      instance = new ModelClass();
    } else if (context.model && context.model.$config.type === resource.type) {
      const ModelClass = context.model;

      instance = new ModelClass();
    } else {
      throw new FuncModelError(
        `No alternative found for JSON:API resource with type \`${resource.type}\`. You should use a Store and register a model for this type in it.`,
      );
    }

    instance.id = resource.id ?? instance.id;
  }

  if (!isNil(instance.id)) {
    if (context.cache) {
      await context.cache.put(resource.type, instance.id, instance);
    }

    const instancesMapOfType = deserializationData.instances.get(resource.type);
    if (instancesMapOfType) {
      instancesMapOfType.set(instance.id, instance);
    }
  }

  return instance;
}