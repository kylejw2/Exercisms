//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  let strArr = num + '';
  const numLength = strArr.length;
  strArr = strArr.split('');
  const total = strArr.reduce((accumulator, current) => {
    return accumulator + (+current)**(numLength);
  }, 0)
  if (total === num) {return true;}
  else {return false;}
};
