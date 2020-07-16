//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { error } from "console";

export class DiffieHellman {
  constructor(...options) {
    const isPrime = options.map(current => {
      for (let i = 2; i < current; i++) {
        if (current % i === 0) {return false;}
      }
      return true;
    });
    const inRange = options.map(current => {
      if (current > 1 && current < 9999) {return true;}
      else {return false;}
    });
    if (!isPrime[0] || !isPrime[1] || !inRange[0] || !inRange[1]) {
      throw new Error();
    }
    this._p = options[0];
    this._g = options[1];
  }
  
  getPublicKeyFromPrivateKey(prvKey) {
    if (prvKey <= 1 || prvKey >= this._p) {throw "Private key cannot be negative"}
    return (this._g**prvKey) % this._p;
  }

  getSharedSecret(prvKey, publicKey) {
    return (publicKey**prvKey) % this._p;
  }
}
