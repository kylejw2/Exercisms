//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (wordToMatch, array) => {
  const anagrams = [];
  const myWord = {};
  for (let i = 0; i < wordToMatch.length; i++) {
    if (myWord.hasOwnProperty(wordToMatch[i].toLowerCase())) {
      myWord[wordToMatch[i].toLowerCase()]++;
    } else {
      myWord[wordToMatch[i].toLowerCase()] = 1;
    }
  }

  for (let i = 0; i < array.length; i++) {
    const arrayWord = {};
    for (let j = 0; j < array[i].length; j++) {
      if (array[i].length === wordToMatch.length && array[i].toLowerCase() !== wordToMatch.toLowerCase()) {
        if (arrayWord.hasOwnProperty(array[i][j].toLowerCase())) {
          arrayWord[array[i][j].toLowerCase()]++;
        } else {
          arrayWord[array[i][j].toLowerCase()] = 1;
        }
      }
    }
    // Compare the values between the two objects
    const myWordKeys = Object.keys(myWord);
    let flag = true;
    for (let j = 0; j < myWordKeys.length; j++) {
      if (arrayWord[myWordKeys[i]] !== myWord[myWordKeys[i]]) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      anagrams.push(array[i]);
    }
  }
  return anagrams;
}
