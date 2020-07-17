//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (str, limit) => {
  if (/[a-z]/i.test(str)) {throw new Error('Digits input must only contain digits')};
  if ((str === '' && limit > 0) || (str.length < limit)) {throw new Error('Span must be smaller than string length')};
  if (limit === 0) {return 1};
  if (limit < 0) {throw new Error('Span must be greater than zero')}

  const nums = str.split('').map(ele => +ele);
  let maxProduct = 0;
  let product;
  for (let i = 0; i < nums.length - limit + 1; i++) {
    product = 1;
    for (let j = i; j < i + limit; j++){
      product *= nums[j];
    }
    if (product > maxProduct) {maxProduct = product};
  }
  return maxProduct;
};
