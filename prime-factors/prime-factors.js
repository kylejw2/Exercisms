//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (num) => {
  const primeFacs = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      primeFacs.push(i);
      num /= i;
    }
  }
  return primeFacs;
};
