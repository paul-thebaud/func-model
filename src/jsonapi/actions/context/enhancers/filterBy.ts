import { Action } from '@/core';
import { param } from '@/http';
import consumePrevParams from '@/http/actions/context/consumers/consumePrevParams';
import { Dictionary } from '@/utilities';

/**
 * [Filter the JSON:API resource](https://jsonapi.org/format/#fetching-filtering)
 * by the given key and value.
 * When key is an object, it will spread the object as a filter values map.
 * The new filter will be merged with the previous ones.
 *
 * @param key
 * @param value
 *
 * @category Enhancers
 */
export default function filterBy(key: string | Dictionary, value?: unknown) {
  return async <C extends {}>(action: Action<C>) => action.use(param('filter', {
    ...consumePrevParams(await action.useContext(), null)?.filter,
    ...(typeof key === 'string' ? { [key]: value } : key),
  }));
}
