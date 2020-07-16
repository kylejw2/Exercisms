//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (str) => {
  const strArr = str.split(' ');
  if (strArr[0] !== 'What' || !/is/.test(strArr[1])) {throw new Error('Unknown operation')}
  strArr.splice(0, 2);
  let num1, num2, answer = 0;
  const operationBank = {
    plus: '+',
    minus: '-',
    multiplied: '*',
    divided: '/'
  }
  if (strArr.length === 1 && typeof(+strArr[0]) === 'number') {
    return +strArr[0].substr(0, strArr[0].length - 1);
  }
  if (/cubed/.test(strArr)) {
    throw new Error('Unknown operation');
  }
  while (strArr.length > 0) {
    if (typeof(+strArr[0]) === 'number') {
      let firstOperation = strArr.find(ele => operationBank.hasOwnProperty(ele));
      let firstOpIndex = strArr.findIndex(ele => operationBank.hasOwnProperty(ele));
      if (firstOpIndex === -1) {throw new Error("Syntax error")}
      
      switch(firstOperation) {
        case 'plus':
          if (typeof +strArr[firstOpIndex - 1] === 'number' && /\d/.test(strArr[firstOpIndex + 1])) {
            if (/[?]/.test(strArr[firstOpIndex + 1]) && answer === 0) {
              answer = +strArr[firstOpIndex - 1] + +strArr[firstOpIndex + 1].substr(0, strArr[firstOpIndex + 1].length - 1);
              return answer;
            } else if (/[?]/.test(strArr[firstOpIndex + 1])) {
              answer += +strArr[firstOpIndex + 1].substr(0, strArr[firstOpIndex + 1].length - 1);
              return answer;
            }
            else {
              answer = +strArr[firstOpIndex - 1] + +strArr[firstOpIndex + 1].substr(0, strArr[firstOpIndex + 1].length);
              strArr.splice(0, 2);
            }
          } else {
            throw new Error("Syntax error");
          }
          break;
        case 'minus':
          if (typeof +strArr[firstOpIndex - 1] === 'number' && /\d/.test(strArr[firstOpIndex + 1])) {
            if (/[?]/.test(strArr[firstOpIndex + 1]) && answer === 0) {
              answer = +strArr[firstOpIndex - 1] - +strArr[firstOpIndex + 1].substr(0, strArr[firstOpIndex + 1].length - 1);
              return answer;
            } else if (/[?]/.test(strArr[firstOpIndex + 1])) {
              answer -= +strArr[firstOpIndex + 1].substr(0, strArr[firstOpIndex + 1].length - 1);
              return answer;
            }
            else {
              answer = +strArr[firstOpIndex - 1] - +strArr[firstOpIndex + 1].substr(0, strArr[firstOpIndex + 1].length);
              strArr.splice(0, 2);
            }
          } else {
            throw new Error("Syntax error");
          }
          break;
        case 'multiplied':
          if (typeof +strArr[firstOpIndex - 1] === 'number' && /\d/.test(strArr[firstOpIndex + 2])) {
            if (/[?]/.test(strArr[firstOpIndex + 2]) && answer === 0) {
              answer = +strArr[firstOpIndex - 1] * +strArr[firstOpIndex + 2].substr(0, strArr[firstOpIndex + 2].length - 1);
              return answer;
            } else if (/[?]/.test(strArr[firstOpIndex + 2])) {
              answer *= +strArr[firstOpIndex + 2].substr(0, strArr[firstOpIndex + 2].length - 1);
              return answer;
            }
            else {
              answer = +strArr[firstOpIndex - 1] * +strArr[firstOpIndex + 2].substr(0, strArr[firstOpIndex + 2].length);
              strArr.splice(0, 3);
            }
          } else {
            throw new Error("Syntax error");
          }
          break;
        default:
          if (typeof +strArr[firstOpIndex - 1] === 'number' && /\d/.test(strArr[firstOpIndex + 2])) {
            if (/[?]/.test(strArr[firstOpIndex + 2]) && answer === 0) {
              answer = +strArr[firstOpIndex - 1] / +strArr[firstOpIndex + 2].substr(0, strArr[firstOpIndex + 2].length - 1);
              return answer;
            } else if (/[?]/.test(strArr[firstOpIndex + 2])) {
              answer /= +strArr[firstOpIndex + 2].substr(0, strArr[firstOpIndex + 2].length - 1);
              return answer;
            }
            else {
              answer = +strArr[firstOpIndex - 1] / +strArr[firstOpIndex + 2].substr(0, strArr[firstOpIndex + 2].length);
              strArr.splice(0, 3);
            }
          } else {
            throw new Error("Syntax error");
          }
          break;
      }
    }
    else {
      throw new Error("Syntax error");
    }
  }
  throw new Error("Syntax error");
};