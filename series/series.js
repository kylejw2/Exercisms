//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(digits) {
    const wrongDigits = digits.split('');
    this._digits = wrongDigits.map(digit => +digit);
  }

  get digits() {
    return this._digits;
  }

  slices(num) {
    const slicedArray = [];
    if (num > this._digits.length) {
      throw "Slice size is too big.";
    }
    for (let i = 0; i < this._digits.length; i++) {
      if (i + num <= this._digits.length) {
        slicedArray.push(this._digits.slice(i, i+num));
      } else {
        break;
      }
    }
    return slicedArray;
  }
}
