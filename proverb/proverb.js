//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...array) => {
  return array.reduce((acc, word, index) => {
    if (index === array.length - 2 && typeof(array[array.length - 1]) === 'object') {return acc};
    if (index === array.length - 1 && typeof(word) === 'object') {return acc += `And all for the want of a ${word.qualifier} ${array[0]}.`};
    if (index === array.length - 1) {return acc += `And all for the want of a ${array[0]}.`};
    return acc += `For want of a ${word} the ${array[index + 1]} was lost.\n`;
  }, '');
};
