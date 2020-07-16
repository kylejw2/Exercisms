//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (str) => {
  if ( str === '') return true;
  let regex = /[a-z]/gi;
  let arr = str.match(regex);
  let letters = arr.map(element => element.toLowerCase());
  let isogram = true;

  let wordObj = {};
  for (let i = 0; i < letters.length; i++) {
    if (!wordObj.hasOwnProperty(letters[i])) {
      wordObj[letters[i]] = 1;
    } else {
      wordObj[letters[i]]++;
      isogram = false;
    }
  }
  return isogram;
};
