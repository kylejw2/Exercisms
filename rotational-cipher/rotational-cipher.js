//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RotationalCipher {

  static rotate(input, num) {
    const lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const regex = /[A-Z]/;
    const regex2 = /[^a-zA-Z]|\'/;
    let str = input.split('');
    str = str.map(currentLetter => {
      if (regex2.test(currentLetter)) {return currentLetter}
      let isCapital = false;
      if (regex.test(currentLetter)) {
        isCapital = true;
        currentLetter = currentLetter.toLowerCase();
      }
      const letterIndex = lowerAlphabet.indexOf(currentLetter);
      const startPoint = (letterIndex + num) % 26;
      if (isCapital) {return lowerAlphabet[startPoint].toUpperCase();}
      else {return lowerAlphabet[startPoint];}
    })
    return str.reduce((accumulator, current) => {
      return accumulator += current;
    }, '')
  }
}
