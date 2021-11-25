Utilities for working with CSS in JS.

```js
import * as css from '@intrnl/cssom-utils';

css.px(50);
// CSSUnitValue { value: 50, unit: 'px' }
// toString(): 50px

css.add(css.px(50), css.px(150));
// CSSUnitValue { value: 200, unit: 'px' }
// toString(): 200px

css.sub(css.vh(100), css.px(16));
// CSSCalcValue { values: [100vh, 16px], op: '-' }
// toString(): calc(100vh - 16px)
```
