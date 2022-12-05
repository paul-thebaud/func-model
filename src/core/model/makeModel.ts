import FuncModelError from '@/core/errors/funcModelError';
import compose from '@/core/model/compose';
import { Model, ModelConfig, ModelInstance, ModelSchema } from '@/core/model/types';
import warn from '@/core/utilities/warn';

export default function makeModel<S extends ModelSchema<{}> = {}, E extends object = {}>(
  config: ModelConfig | string,
  schema?: S,
  extension?: E & ThisType<ModelInstance<S & E>>,
) {
  function ModelClass(this: ModelInstance) {
    Object.defineProperty(this, '$MODEL_TYPE', { writable: true, value: 'instance' });
    Object.defineProperty(this, 'exists', { writable: true, value: false });
    Object.defineProperty(this, '$loaded', { writable: true, value: {} });
    Object.defineProperty(this, '$original', { writable: true, value: {} });
    Object.defineProperty(this, '$values', { writable: true, value: {} });

    Object.defineProperty(this, 'id', {
      writable: true,
      enumerable: true,
      value: undefined,
    });

    Object.entries(ModelClass.$schema).forEach(([key, def]) => {
      Object.defineProperty(this, key, {
        enumerable: true,
        get: () => this.$values[key],
        set: (value) => {
          this.$values[key] = value;
        },
      });

      if (typeof def.default === 'function') {
        this.$values[key] = def.default();
      } else if (def.default !== undefined) {
        this.$values[key] = def.default;

        if (def.default && typeof def.default === 'object') {
          warn('default object values should be defined using a factory function');
        }
      }
    });
  }

  ModelClass.$MODEL_TYPE = 'model';
  ModelClass.$config = typeof config === 'string' ? {
    type: config,
  } : config;
  ModelClass.$schema = {} as ModelSchema<{}>;
  ModelClass.prototype = {};
  ModelClass.schema = (addSchema: object) => {
    compose(ModelClass.$schema, addSchema);

    return ModelClass;
  };
  ModelClass.extension = (addExtension: object) => {
    compose(ModelClass.prototype, addExtension);

    return ModelClass;
  };
  ModelClass.extend = (addSchemaAndExtension: { schema?: object; extension?: object; }) => {
    ModelClass.schema(addSchemaAndExtension.schema ?? {});
    ModelClass.extension(addSchemaAndExtension.extension ?? {});

    return ModelClass;
  };

  Object.defineProperty(ModelClass, '$rawSchema', {
    value: () => {
      throw new FuncModelError(
        '`Model.$rawSchema` cannot be used as it only holds generic raw schema of model',
      );
    },
  });

  if (schema) {
    ModelClass.schema(schema);
  }

  if (extension) {
    ModelClass.extension(extension);
  }

  return ModelClass as unknown as Model<S & E, ModelInstance<S & E>>;
}
