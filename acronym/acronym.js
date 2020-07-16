//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (str) => {
  let phrase = str.replace(/-|_/g, ' ');
  while (phrase.search('  ') > -1) {
    phrase = phrase.replace('  ', ' ');
  }
  phrase = phrase.split(" ");
  let acronym = '';
  for (let i = 0; i < phrase.length; i++) {
    acronym += phrase[i][0];
  }
  return acronym.toUpperCase();
};
