//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colorsToBeDecoded) => {
  const decodedColorsArr = [];
  let decodedColors = "";
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < COLORS.length; j++) {
      if (colorsToBeDecoded[i] === COLORS[j]) {
        decodedColorsArr.push(j);
      }
    }
  }
  for (let i = 0; i < decodedColorsArr.length; i++) {
    decodedColors += decodedColorsArr[i];
  }
  return +decodedColors
};

const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
