import { List, String } from 'ts-toolbelt';

type SplitByDelimiter<S extends string, TChar extends string> = String.Join<List.Filter<String.Split<S, TChar>, ''>, '_'>;

type NormalizeKey<S extends string> = (
  SplitByDelimiter<
  SplitByDelimiter<
  SplitByDelimiter<
  SplitByDelimiter<S, '-'>,
  '.'>,
  '_'>,
  ' '>
);

/**
 * @private
 */
type ToCamelCaseInternal<S extends string> = S extends `${infer H}_${infer Tail}`
  ? `${H}${Capitalize<ToCamelCaseInternal<Tail>>}`
  : S;

export type ToCamelCase<T extends string> = ToCamelCaseInternal<NormalizeKey<T>> extends ''
  ? never
  : ToCamelCaseInternal<NormalizeKey<T>>;

export type CamelCased<TMap extends Record<PropertyKey, PropertyKey>, TData> = {
  [
  P in keyof TData as P extends keyof TMap
    ? TMap[P]
    : P extends string
      ? ToCamelCase<P>
      : P
  ]: TData[P]
};
