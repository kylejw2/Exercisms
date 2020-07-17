//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Rectangles {
  static count(shape) {
    const myRecs = []; // store the rectangles that have been passed and sort them so that crossing same rectangle doesn't store the already saved rectangle
    let count = 0;
    for (let i = 0; i < shape.length; i++) {
      for (let j = 0; j < shape[i].length; j++) {
        if (shape[i][j] === '+') {
          let tl = j;
          let rightCorners = this.findRightCorners(shape, i, j);
          for (let k = 0; k < rightCorners.length; k++) {
            let flag = false;
            for (let row = i + 1; row < shape.length; row++) {
              if (shape[row][tl] !== '|' && shape[row][tl] !== '+') {break;}
              if (shape[row][rightCorners[k]] !== '|' && shape[row][rightCorners[k]] !== '+') {break;}
              let flag = false;

              if (shape[row][tl] === '+' && shape[row][rightCorners[k]] === '+') {
                for (let m = tl + 1; m < rightCorners[k]; m++) {
                  if (shape[row][m] !== '-' && shape[row][m] !== '+') {flag = true;}
                }
                if (!flag) {count++;}
              }
            }
          }
        }
      }
    }
    return count;
  }

  static findRightCorners(shape, i, j) {
    const rightCorners = [];
    for (let z = j + 1; z < shape[i].length; z++) {
      if (shape[i][z] === '-') {continue;}
      else if (shape[i][z] === '+') {rightCorners.push(z); continue;}
      else {break;}
    }
    return rightCorners;
  }
}
