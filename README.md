Utilities for working with CSS in JS.

```js
import * as css from '@intrnl/cssom-utils';

css.px(50);
// 50px

css.add(css.px(50), css.px(150));
// calc(50px + 50px)

css.sub(css.vh(100), css.px(16));
// calc(100vh - 16px)
```
