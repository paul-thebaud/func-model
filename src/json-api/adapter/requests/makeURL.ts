import { ActionContext } from '@/core';
import makeEndpoint from '@/json-api/adapter/requests/makeEndpoint';
import makeParams from '@/json-api/adapter/requests/makeParams';
import { JsonApiAdapterOptions } from '@/json-api/adapter/types';

function joinStrings(
  parts: (string | undefined)[],
  separator: string,
) {
  return parts
    .filter((s) => typeof s === 'string')
    .join(separator);
}

export default function makeURL(context: ActionContext, options: JsonApiAdapterOptions) {
  return joinStrings([
    joinStrings(makeEndpoint(context, options), '/'),
    makeParams(context, options),
  ], '?');
}