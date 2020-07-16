//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(real, imag) {
    this._real = real;
    this._imag = imag;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imag;
  }

  add(compNum) {
    this._real += compNum.real;
    this._imag += compNum.imag;
    return this;
  }

  sub(compNum) {
    this._real -= compNum.real;
    this._imag -= compNum.imag;
    return this;
  }

  div(compNum) {
    const real = this._real;
    const imag = this._imag;
    this._real = (real * compNum.real + imag * compNum.imag) / (compNum.real**2 + compNum.imag**2);
    this._imag = (imag * compNum.real - real * compNum.imag) / (compNum.real**2 + compNum.imag**2);
    return this;
  }
  
  mul(compNum) {
    const real = this._real;
    const imag = this._imag;
    this._real = (real * compNum.real - imag * compNum.imag);
    this._imag = (imag * compNum.real + real * compNum.imag);

    return this;
  }

  get abs() {
    return Math.sqrt(this._real**2 + this._imag**2);
  }

  get conj() {
    if (this._imag !== 0) {this._imag *= -1;}
    return this;
  }

  get exp() {
    const real = this._real;
    const imag = this._imag;
    this._real = Math.exp(real) * Math.cos(imag);
    this._imag = Math.exp(real) * Math.sin(imag);
    return this;
  }
}
