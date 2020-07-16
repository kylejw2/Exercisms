//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triplet {
  constructor(a = 0, b = 0, c = 0) {
    this._a = a;
    this._b = b;
    this._c = c;
  }

  sum() {
    return this._a + this._b + this._c;
  }

  product() {
    return this._a * this._b * this._c;
  }

  isPythagorean() {
    if ((this._a**2 + this._b**2) === this._c**2) {return true;}
    else {return false;}
  }

  static where(obj) {
    let a, b, c;
    if (obj.hasOwnProperty('minFactor')) {
      a = obj.minFactor;
      b = a++;
      c = b++;
    } else {
      a = 1;
      b = 2;
      c = 3;
    }
    let sum = null;
    if (obj.hasOwnProperty('sum')) {
      sum = obj.sum;
    }
    const arr = [];
    const min = a;

    for (let i = a; i <= obj.maxFactor - 2; i++) {
      for (let j = i + 1; j <= obj.maxFactor - 1; j++) {
        for (let k = j + 1; k <= obj.maxFactor; k++) {
          if (sum !== null && sum !== i + j + k) {continue;}
          if ((i**2 + j**2) === k**2) {arr.push(new Triplet(i, j, k));}
        }
      }
    }
    return arr;
  }
}
