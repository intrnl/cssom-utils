const create = (op) => (...values) => `calc(${values.join(` ${op} `)})`;

export const add = create('+');
export const sub = create('-');
export const div = create('/');
export const mul = create('*');
