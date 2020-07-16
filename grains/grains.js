//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const square = (num) => {
  if (num < 1 || num > 64) {throw new Error('square must be between 1 and 64');}
  if (num < 2) {return num;}
  return BigInt(2**(num - 1));
};

export const total = () => {
  // Initialized to 1 so that there isn't a mix between BigInts and regular ints
  let count = BigInt(1);
  for (let i = 2; i <= 64; i++) {
    count += square(i);
  }
  return count;
};
