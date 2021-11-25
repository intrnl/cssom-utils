export class CSSUnitValue {
	constructor (value, unit) {
		this.value = Number(value);
		this.unit = unit;
	}

	toString () {
		return `${this.value}${this.unit}`;
	}
}


export const number = create('');
export const percent = create('%');
export const em = create('em');
export const ex = create('ex');
export const ch = create('ch');
export const rem = create('rem');
export const vw = create('vw');
export const vh = create('vh');
export const vmin = create('vmin');
export const vmax = create('vmax');
export const cm = create('cm');
export const mm = create('mm');
export const inch = create('in');
export const pt = create('pt');
export const pc = create('pc');
export const px = create('px');
export const Q = create('Q');
export const deg = create('deg');
export const grad = create('grad');
export const rad = create('rad');
export const turn = create('turn');
export const s = create('s');
export const ms = create('ms');
export const Hz = create('Hz');
export const kHz = create('kHz');
export const dpi = create('dpi');
export const dpcm = create('dpcm');
export const dppx = create('dppx');
export const fr = create('fr');


function create (unit) {
	return (value) => new CSSUnitValue(value, unit);
}
