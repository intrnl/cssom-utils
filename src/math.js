import { CSSUnitValue } from './unit.js';


export class CSSMathValue {
	constructor (values, op) {
		this.values = values;
		this.op = op;
	}

	toString () {
		const result = this.values.join(', ');
		return `${this.op}(${result})`;
	}
}

export class CSSCalcValue {
	constructor (values, op) {
		this.values = values;
		this.operation = op;
	}

	toString () {
		const result = this.values.join(` ${this.operation} `);
		return `calc(${result})`;
	}
}


export const add = create('+', CSSCalcValue, (accu, next) => accu + next);
export const sub = create('-', CSSCalcValue, (accu, next) => accu - next);
export const div = create('/', CSSCalcValue, (accu, next) => accu / next);
export const mul = create('*', CSSCalcValue, (accu, next) => accu * next);

export const min = create('min', CSSMathValue, Math.min);
export const max = create('max', CSSMathValue, Math.max);


function create (op, product, reducer) {
	return (base, ...values) => {
		if (isSameUnit(base, values)) {
			const next = values.reduce((accu, next) => reducer(accu, next.value), base.value);
			return new base.constructor(next, base.unit);
		}

		return new product([base, ...values], op);
	}
}

function isSameUnit (base, values) {
	return values.every((value) => (
		value instanceof CSSUnitValue && (!value.unit || value.unit === base.unit)
	));
}
