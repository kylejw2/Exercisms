//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {
  static generate(obj) {
    this.max = obj.maxFactor;
    this.min = obj.minFactor;
    if (this.min > this.max) {throw new Error('min must be <= max')}
    const myObj = Palindromes.prototype.findSmallestLargest(this.min, this.max);
    if (myObj.small === this.max * this.max && !Palindromes.prototype.checkPalindrome(this.max, this.max)) {myObj.small = null;}
    if (myObj.large === this.min) {myObj.large = null;}
    this.smallest = {
      value: myObj.small,
      factors: Palindromes.prototype.findFactors(myObj.small, this.min, this.max)
    }
    this.largest = {
      value: myObj.large,
      factors: Palindromes.prototype.findFactors(myObj.large, this.min, this.max)
    }
    return this;
  }

  findSmallestLargest(min, max) {
    let small = max * max;
    let large = min;
    for (let i = min; i <= max; i++) {
      for (let j = i; j <= max; j++) {
        if (this.checkPalindrome(i, j) && i * j < small) {
          small = i * j;
        }
        if (this.checkPalindrome(i, j) && i * j > large) {
          large = i * j;
        }
      }
    }
    return { small, large };
  }

  checkPalindrome(num1, num2) {
    const product = '' + (num1 * num2);
    const temp = product;

    for (let i = 0; i < product.length / 2; i++) {
      if (product[i] !== temp[temp.length - 1 - i]) {return false;}
    }
    return true;
  }

  findFactors(num, min, max) {
    const myArr = [];
    for (let i = min; i <= max; i++) {
      for (let j = i; j <= max; j++) {
        if (i * j === num) {myArr.push([i, j])}
      }
    }
    return myArr;
  }
}
