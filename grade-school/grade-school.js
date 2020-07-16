//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this._roster = {};
  }

  roster() {
    const keys = Object.keys(this._roster);
    for (let i = 0; i < keys.length; i++) {
      this._roster[keys[i]].sort();
    }
    return JSON.parse(JSON.stringify(this._roster))
  }

  add(name, grade) {
    if(this._roster.hasOwnProperty(grade)) {
      this._roster[grade].push(name);
    } else {
      this._roster[grade] = [name];
    }
  }

  grade(num) {
    const returnArr = [];
    if (!this._roster.hasOwnProperty(num)) {return [];}
    else {
      for (let i = 0; i < this._roster[num].length; i++) {
        returnArr.push(this._roster[num][i]);
      }
      returnArr.sort(); 
      return returnArr;
    }
  }
}
