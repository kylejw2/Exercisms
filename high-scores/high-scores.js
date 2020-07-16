//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(input) {
    this.input = input;
    this.highScoreArr = [];
    for (let i = 0; i < this.input.length; i++) {
      if (i === 0) {
        this.highScoreArr.push(this.input[0]);
        continue;
      }
      if (i === 1) {
        this.highScoreArr.push(this.input[1]);
      }
      if (i === 2) {
        this.highScoreArr.push(this.input[2]);
      }
      if (this.input[i] > this.highScoreArr[0]) {
        this.highScoreArr.unshift(this.input[i]);
        this.highScoreArr.pop();
      } else if (this.highScoreArr.length > 1 && this.input[i] > this.highScoreArr[1]) {
        const temp = this.highScoreArr[1];
        this.highScoreArr.pop();
        this.highScoreArr.pop();
        this.highScoreArr.push(this.input[i]);
        this.highScoreArr.push(temp);
      } else if (this.highScoreArr.length > 2 && this.input[i] > this.highScoreArr[2]) {
        this.highScoreArr.pop();
        this.highScoreArr.push(this.input[i]);
        }
    }
  }
  get scores() {
    return this.input;
  }

  get latest() {
    return this.input[this.input.length - 1];
  }

  get personalBest() {
    return this.highScoreArr[0];
  }

  get personalTopThree() {
    return this.highScoreArr;
  }
}
