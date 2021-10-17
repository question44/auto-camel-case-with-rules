import * as camelcase from 'camelcase';
import { CamelCased } from './types';

/**
 * @example ```
 *
 *  const mapUser = autoCamelCaseWithRules({
 *    id: 'userId',
 *  });
 *
 *  const result = mapUser({
 *    id: 1,
 *    ['do you.like__candy']: true,
 *    created_at: new Date()
 *  });  // result: { userId: 1, doYouLikeCandy: true, createdAt: '2021-05-15T21:57:00.524Z' };
 *
 * ````
 */
const autoCamelCaseWithCustomRules = <
    TMap extends Record<PropertyKey, PropertyKey>,
    >(map: Readonly<TMap>) => <TData>(data: TData)
    : CamelCased<TMap, TData> => Object.entries(data).reduce((result, [key, value]) => {
      const newKey = typeof map[key] === 'string'
        ? map[key]
        : camelcase(key);
      // eslint-disable-next-line no-param-reassign
      result[newKey as keyof CamelCased<TMap, TData>] = value;
      return result;
    }, {} as CamelCased<TMap, TData>);

export default autoCamelCaseWithCustomRules;
