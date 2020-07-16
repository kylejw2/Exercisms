//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (num) => {
  const binary = num.toString(2);
  const binaryBank = ['wink', 'double blink', 'close your eyes', 'jump'];
  const binaryArr = binary.split('');
  const myArr = [];
  let counter = 0;
  let flag = false;

  for (let i = binaryArr.length - 1; i > -1; i--) {
    if (i === 0 && binaryArr.length > 4) {flag = true; continue;}
    if (binaryArr[i] === '1') {
      myArr.push(binaryBank[counter]);
    }
    counter++;
  }

  // Check to see if the 'reverse' condition is true
  if (flag) {
    const temp = JSON.parse(JSON.stringify(myArr));
    for (let i = 0; i < myArr.length; i++) {
      myArr[i] = temp[temp.length - 1 - i];
    }
  }
  return myArr;
};
