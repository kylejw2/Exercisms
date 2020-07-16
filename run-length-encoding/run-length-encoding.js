//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { captureRejectionSymbol } from "events";

export const encode = (longStr) => {
  const arr = longStr.split('');
  let futureElement = arr[1];
  const doesFutureElementExist = (index) => {
    if (index < arr.length) {return true;}
    else {return false;}
  }
  let count = 1;
  return arr.reduce((accumulator, element, index, array) => {
    if (futureElement === element) {
      count++;
      if (doesFutureElementExist(index + 2)) {futureElement = array[index+2]}
      else {futureElement = null;}
    }
    else {
      if (count > 1) {
        accumulator = accumulator + count + element;
        if (doesFutureElementExist(index + 2)) {futureElement = array[index+2]}
        else {futureElement = null;}
        count = 1;
      } else {
        accumulator += element;
        if (doesFutureElementExist(index + 2)) {futureElement = array[index+2]}
        else {futureElement = null;}
      }
    }
    return accumulator;
  }, '')
};

export const decode = (str) => {
  const longStr = str.split('');
  const regex = /[0-9]/;
  let numSeq = '';

  return longStr.reduce((accumulator, current) => {
    if (regex.test(current)) {
      numSeq += current;
    } else {
      if (numSeq !== '') {
        for (let i = 0; i < +numSeq; i++) {
          accumulator += current;
        }
        numSeq = '';
      } else {
        accumulator += current;
      }
    }

    return accumulator;
  }, '')
};
