import {
  all,
  allUsing,
  cached,
  cachedOr,
  cachedOrFail,
  cachedUsing,
  none,
  one,
  oneOr,
  oneOrCurrent,
  oneOrFail,
  oneUsing,
  raw,
  rawUsing,
} from '@/core';

export default {
  ...all.extension,
  ...allUsing.extension,
  ...one.extension,
  ...oneOrFail.extension,
  ...oneOrCurrent.extension,
  ...oneOr.extension,
  ...oneUsing.extension,
  ...none.extension,
  ...raw.extension,
  ...rawUsing.extension,
  ...cached.extension,
  ...cachedOrFail.extension,
  ...cachedOr.extension,
  ...cachedUsing.extension,
};