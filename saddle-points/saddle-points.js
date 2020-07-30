//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (mtrx) => {
  const matrix = mtrx;
  const saddles = [];
  let potentialMax = 0;
  const checkForSaddle = (i, j) => {
    for (let col = j; col < matrix[i].length; col++) {
      if (matrix[i][col] > matrix[i][j]) {return false;}
    }
    for (let k = 0; k < matrix.length; k++) {
      if (k === i) {continue;}
      if (matrix[k][j] < matrix[i][j]) {return false;}
    }
    return true;
  }
  
  for (let i = 0; i < matrix.length; i++) {
    potentialMax = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] >= potentialMax) {
        potentialMax = matrix[i][j];
        if (checkForSaddle(i, j)) {saddles.push({row: +[i]+1, column: +[j]+1})}
      }
    }
  }
  return saddles;
};
