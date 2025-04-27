// TO reproduce with chunk: `pnpm run build` then `pnpm run dev:next-app`
// this crashes Next in SSR because of delegateEvents: ReferenceError: window is not defined
import * as q from '@tanstack/query-devtools'
console.log(q);
