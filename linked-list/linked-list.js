//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(data) {
    this._data = data;
    this._next = null;
    this._previous = null;
  }
}

export class LinkedList {
  constructor() {
    this._head = null;
    this._numElements = 0;
  }
  push(data) {
    if (this._head === null) {this._head = new Node(data); this._numElements++;}
    else {
      const newNode = new Node(data);
      let current = this._head;
      while(current._next !== null) {
        current = current._next;
      }
      current._next = newNode;
      newNode._previous = current;
      this._numElements++;
    }
  }

  pop() {
    if (this._head === null) {return null}
    else if (this._head._next === null) {
      const val = this._head._data;
      this._head = null;
      this._numElements--;
      return val;
    }
    else {
      let previous = null;
      let current = this._head;
      while (current._next !== null) {
        previous = current;
        current = current._next;
      }
      previous._next = current._next;
      this._numElements--;
      return current._data;
    }
  }

  shift() {
    const val = this._head._data;
    if (this._head === null) {return null;}
    else if (this._head._next === null) {
      this._head = null;
    }
    else {
      const secondEle = this._head._next;
      this._head = secondEle;
      this._head._previous = null;
    }
    this._numElements--;
    return val;
  }

  unshift(data) {
    if (this._head === null) {this._head = new Node(data);}
    else {
      const secondEle = this._head;
      this._head = new Node(data);
      this._head._next = secondEle;
    }
    this._numElements++;
  }

  delete(data) {
    if (this._head._data === data && this._head._next === null) {
      this._head = null;
      this._numElements--;
    } else if (this._head._data === data) {
      const secondEle = this._head._next;
      this._head = secondEle;
      this._head._previous = null;
      this._numElements--;
    } else {
      let current = this._head;
      let previous = null;
      while(current._next !== null && current._data !== data) {
        previous = current;
        current = current._next;
      }
      if (current._data === data) {
        previous._next = current._next;
        this._numElements--;
      }
    }
  }

  count() {
    return this._numElements;
  }
}
