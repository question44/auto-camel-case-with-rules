"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const camelcase = require("camelcase");
/**
 * @example ```
 *
 *  const mapUser = autoCamelCaseWithRules({
 *    id: 'userId',
 *  } as const);
 *
 *  const result = mapUser({
 *    id: 1,
 *    ['do you.like__candy']: true,
 *    created_at: new Date()
 *  });  // result: { userId: 1, doYouLikeCandy: true, createdAt: '2021-05-15T21:57:00.524Z' };
 *
 * ````
 */
const autoCamelCaseWithCustomRules = (map) => (data) => Object.entries(data).reduce((result, [key, value]) => {
    const newKey = typeof map[key] === 'string'
        ? map[key]
        : camelcase(key);
    // eslint-disable-next-line no-param-reassign
    result[newKey] = value;
    return result;
}, {});
exports.default = autoCamelCaseWithCustomRules;
