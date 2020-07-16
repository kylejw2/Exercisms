//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (num) => {
  let value = num;
  let counter = 0;
  if (value > 0) {
    while (value !== 1) {
      if (value % 2 === 0) {
        value = value / 2;
      } else {
        value = value * 3 + 1;
      }
      counter++;
    }
    return counter;
  } else {
    throw "Only positive numbers are allowed";
  }
};
