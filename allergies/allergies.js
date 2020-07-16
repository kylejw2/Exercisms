//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(score) {
    this._score = score;
    this._list = this.getAllergies(score);
  }

  getAllergies(score) {
    const binaryScore = score.toString(2);
    const allergyList = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'];
    const myList = [];
    let applicableBinary = binaryScore;
    let counter = 0;
    if (binaryScore.length > allergyList.length) {applicableBinary = binaryScore.substr(binaryScore.length - allergyList.length, allergyList.length)}
    for (let i = applicableBinary.length - 1; i > -1; i--) {
      if (applicableBinary[i] === '1') {myList.push(allergyList[counter])}
      counter++;
    }
    return myList;
  }

  list() {
    return this._list;
  }

  allergicTo(str) {
    for (let i = 0; i < this._list.length; i++) {
      if (this._list[i] === str) {return true;}
    }
    return false;
  }
}
