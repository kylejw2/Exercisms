//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (input) => {
  const regex = /[a-z]/gi;
  const regex2 = /[@|!|:]/g;
  if (regex.test(input)) {
    throw "Letters not permitted";
  } else if (regex2.test(input)) {
    throw "Punctuations not permitted";
  }
  const regex3 = /\d/g;
  let phone = input.match(regex3);
  if (phone.length > 11) {
    throw "More than 11 digits";
  } else if (phone.length < 10) {
    throw "Incorrect number of digits";
  }
  if (phone.length === 11 && phone[0] !== '1') {
    throw "11 digits must start with 1";
  }
  const invalidStartNums = {
    '1': 'one',
    '0': 'zero'
  }
  if (phone.length === 11 && phone[1] < 2) {
    throw `Area code cannot start with ${invalidStartNums[phone[1]]}`;
  } else if (phone.length === 10 && phone[0] < 2) {
    throw `Area code cannot start with ${invalidStartNums[phone[0]]}`;
  } else if (phone.length === 11 && phone[4] < 2) {
    throw `Exchange code cannot start with ${invalidStartNums[phone[4]]}`;
  } else if (phone.length === 10 && phone[3] < 2) {
    throw `Exchange code cannot start with ${invalidStartNums[phone[3]]}`;
  }
  if (phone[0] === '1') {
    phone = phone.slice(1);
  }
  return phone.reduce((accumulator, currentLetter) => {
    accumulator += currentLetter;
    return accumulator;
  }, '');
  
};
