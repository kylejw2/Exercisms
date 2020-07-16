//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (str) => {
  let myStr = str;
  while (/ /.test(myStr)) {
    myStr = myStr.replace(' ', '');
  }
  if (myStr.length < 2) {return false;}
  if (/\D/.test(myStr)) {return false;}
  let counter = 0;
  let flag = false;
  for (let i = myStr.length - 1; i > -1; i--) {
    if (flag) {
      let num = +myStr[i] * 2;
      if (num > 9) {num -= 9;}
      flag = false;
      counter += num;
    } else {
      flag = true;
      counter += +myStr[i]
    }
  }
  if (counter % 10 === 0) {return true;}
  return false;
};
