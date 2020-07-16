//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(input) {
    this._key = input || this.randomKey();
  }

  keyBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  randomKey() {
    let str = '';
    for (let i = 0; i < 100; i++) {
      const randomNum = Math.floor(Math.random() * 26);
      str += this.keyBank[randomNum];
    }
    return str;
  }

  encode(userInput) {
    return this.changeStr(userInput, true);
  }

  decode(userInput) {
    return this.changeStr(userInput, false);
  }

  changeStr(userInput, toEncode) {
    const length = userInput.length;
    let myKey = this._key;
    while (myKey.length < length) {
      myKey += myKey;
    }
    myKey = myKey.substr(0, length);
    let newMsg = '';
    let newIndex;
    for (let i = 0; i < length; i++) {
      if (toEncode) {
        newIndex = this.keyBank.findIndex(element => userInput[i] === element) + this.keyBank.findIndex(element => myKey[i] === element);
      } else {
        newIndex = this.keyBank.findIndex(element => userInput[i] === element) - this.keyBank.findIndex(element => myKey[i] === element);
      }
      if (newIndex > 25) {
        newIndex -= 26;
      } else if (newIndex < 0) {
        newIndex += 26;
      }
      newMsg += this.keyBank[newIndex];
    }
    return newMsg;
  }

  get key() {
    return this._key;
  }
}
