//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(data) {
    this.values = data === undefined ? [] : data;
  }

  append(secondList) {
    if (secondList.values === undefined) {return this}
    if (this.values === undefined) {return secondList}
    const length = this.values.length;
    for (let i = 0; i < secondList.values.length; i++) {
      this.values[length + i] = secondList.values[i];
    }
    return this;
  }

  concat(secondList) {
    if (secondList.values === undefined) {return this}
    if (this.values === undefined) {return secondList}
    for (let i = 0; i < secondList.values.length; i++) {
      if (typeof(secondList.values[i]) === 'object') {
        for (let j = 0; j < secondList.values[i].values.length; j++) {
          this.values.push(secondList.values[i].values[j]);
        }
      } else {
        this.values.push(secondList[i]);
      }
    }
    return this;
  }

  filter(myFunc) {
    for (let i = 0; i < this.values.length; i++) {
      if (!myFunc(this.values[i])) {this.values.splice(i, 1)}
    }
    return this;
  }

  map(myFunc) {
    for (let i = 0; i < this.values.length; i++) {
      this.values[i] = myFunc(this.values[i]);
    }
    return this;
  }

  length() {
    let size = 0;
    this.values.forEach(_ => size++);
    return size;
  }

  foldl(myFunc, acc) {
    for (let i = 0; i < this.values.length; i++) {
      acc = myFunc(acc, this.values[i]);
    }
    return acc;
  }

  foldr(myFunc, acc) {
    for (let i = this.values.length - 1; i > -1; i--) {
      acc = myFunc(acc, this.values[i]);
    }
    return acc;
  }

  reverse() {
    const myArr = JSON.parse(JSON.stringify(this.values));
    for (let i = 0; i < this.values.length; i++) {
      this.values[i] = myArr[this.values.length - 1 - i];
    }
    return this;
  }
}
