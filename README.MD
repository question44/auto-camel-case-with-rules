### auto-camel-case-with-rules

This utils allows to change object props to camelcase with optional custom property names.
The returned object has correct type.


#### Example

```ts
import autoCamelCaseWithRules from 'auto-camel-case-with-rules';

const mapUser = autoCamelCaseWithRules({
  id: 'userId',
} as const);

const result = mapUser({
  id: 1,
  ['do you.like__candy']: true,
  created_at: new Date()
});

// result === { userId: 1, doYouLikeCandy: true, createdAt: '2021-05-15T21:57:00.524Z' };

type TResult = typeof result;

// TResult === { userId: number, doYouLikeCandy: boolean, createdAt: Date }


