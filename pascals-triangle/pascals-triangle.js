//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (num) => {
  const pascalsTri = [];
  for (let i = 0; i < num; i++) {
    if (i === 0) {pascalsTri[0] = [1]; continue;}
    pascalsTri[i] = [];
    for (let j = 0; j < pascalsTri[i-1].length; j++) {
      if (j === 0) {pascalsTri[i].push(1);}
      else {pascalsTri[i].push(pascalsTri[i-1][j] + pascalsTri[i-1][j-1])}
    }
    pascalsTri[i].push(1);
  }
  return pascalsTri;
};
