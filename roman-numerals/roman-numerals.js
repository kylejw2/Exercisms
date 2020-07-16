//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (num) => {
  const conversions = {
    '1000': 'M',
    '500': 'D',
    '100': 'C',
    '50': 'L',
    '10': 'X',
    '5': 'V',
    '1': 'I'
  }
  let myNum = num;
  const romanNumerals = Object.keys(conversions);
  let convertedNum = '';
  for (let i = romanNumerals.length - 1; i >= 0; i--) {
    while (Math.floor(myNum / +romanNumerals[i]) > 0) {
      convertedNum += conversions[romanNumerals[i]];
      myNum -= +romanNumerals[i];
    }
    if (i > 0) {
      if (romanNumerals[i][0] === '1' && Math.floor(myNum / (+romanNumerals[i] - +romanNumerals[i-2]) >= 1)) {
        convertedNum += (conversions[romanNumerals[i-2]] + conversions[romanNumerals[i]]);
        myNum -= (+romanNumerals[i] - +romanNumerals[i-2]);
      }
      if (romanNumerals[i][0] === '5' && Math.floor(myNum / (+romanNumerals[i] - +romanNumerals[i-1]) >= 1)) {
        convertedNum += (conversions[romanNumerals[i-1]] + conversions[romanNumerals[i]]);
        myNum -= (+romanNumerals[i] - +romanNumerals[i-1]);
      }
    }
  }
return convertedNum;
};
