import { Order } from '../internal/sort';

export type SortBy<E> = ((a, b) => number) | keyof E;

export interface SortByOptions<E> {
  sortBy?: SortBy<E>;
  sortByOrder?: Order;
}

export interface QueryConfigOptions<E = any> extends SortByOptions<E> {}

export const queryConfigKey = 'akitaQueryConfig';

export function QueryConfig<E>(metadata: QueryConfigOptions<E>) {
  return function(constructor: Function) {
    constructor[queryConfigKey] = {};
    for (let i = 0, keys = Object.keys(metadata); i < keys.length; i++) {
      const key = keys[i];
      constructor[queryConfigKey][key] = metadata[key];
    }
  };
}
