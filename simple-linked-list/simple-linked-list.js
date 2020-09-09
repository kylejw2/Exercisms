export class List {

  constructor(arr = []) {
    this._length = 0;
    this._head = null;
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        this.add({value: arr[i], next: null});
      }
    }
  }

  add(nextValue) {
    if (this._head === null) {
      this._head = nextValue;
      this._length++;
    } else {
      const temp = this._head;
      this._head = nextValue;
      this._head.next = temp;
      this._length++;
    }
  }

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  toArray() {
    let array = [];
    let traverse = this._head;
    if (traverse !== null) {
      array.push(traverse.value);
    }
    while (traverse.next !== null) {
      traverse = traverse.next;
      array.push(traverse.value);
    }
    return array;
  }

  reverse() {
    let left = this._head;
    let traverse = this._head.next;

    // if there are only two elements in the list
    if (traverse.next === null) {
      traverse.next = left;
      left.next = null;
      this._head = traverse;
    } else {
      // if there are more than two elements in the list
      let right = traverse.next;
      left.next = null;
      while (right.next !== null) {
        traverse.next = left;
        left = traverse;
        traverse = right;
        right = right.next;
      }
      traverse.next = left;
      right.next = traverse;
      this._head = right;
    }
    return this;
  }

}

export class Element {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}