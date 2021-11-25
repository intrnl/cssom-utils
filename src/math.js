const createCalc = (op) => (...values) => `calc(${values.join(` ${op} `)})`;
const createMath = (op) => (...values) => `${op}(${values.join(', ')})`;

export const add = createCalc('+');
export const sub = createCalc('-');
export const div = createCalc('/');
export const mul = createCalc('*');

export const min = createMath('min');
export const max = createMath('max');
export const minmax = createMath('minmax');
