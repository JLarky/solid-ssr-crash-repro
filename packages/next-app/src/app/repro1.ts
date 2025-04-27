// TO reproduce with chunk: `pnpm run build` then `pnpm run dev:next-app`
// this crashes Next in SSR because of delegateEvents: ReferenceError: window is not defined
import * as q from '../../../../packages/query-devtools/build/chunk/COXN2ZXO.js';
console.log(q);
