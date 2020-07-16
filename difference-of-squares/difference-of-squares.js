//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(num) {
    this.numSumOfSquares = 0;
    this.numSquareOfSum = 0;
    
    for (let i = 0; i <= num; i++) {
      this.numSumOfSquares += (i*i);
      this.numSquareOfSum += i;
    }

    this.numSquareOfSum = this.numSquareOfSum * this.numSquareOfSum;

    this.numDifference = this.numSquareOfSum - this.numSumOfSquares;
  }

  get sumOfSquares() {return this.numSumOfSquares;}

  get squareOfSum() {return this.numSquareOfSum;}

  get difference() {return this.numDifference;}
}
