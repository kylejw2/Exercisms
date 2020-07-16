//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  const outputArray = [];
  let largestString = input.reduce((largest, str) => {
    if (largest < str.length) {
      largest = str.length;
    }
    return largest;
  }, 0);
  for (let j = 0; j < largestString; j++) { // make a new row
    outputArray[j] = '';
    for (let i = 0; i < input.length; i++) { // fill in the row
      if (input[i].length - 1 < j) {
        outputArray[j] += '@';
      } else {
        outputArray[j] += input[i][j];
      }
    }
  }

const outputArray2 = outputArray.map(currentElement => {
  let newElement = currentElement;
  for (let i = currentElement.length - 1; i > -1; i--) {
    if (currentElement[i] === '@') {
      newElement = currentElement.slice(0, i);
    } else {
      break;
    }
  }
  return newElement;
})

return outputArray2.map(currentElement => {
  return currentElement.replace(/@/g, ' ');
})
};
