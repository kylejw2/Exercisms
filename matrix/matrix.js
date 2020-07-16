//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {  
  constructor(matrix) {
    this.matrix = matrix;
    this.matrixArr = matrix.split('\n').map(row => row
      .split(' ')
      .map(cell => +cell) );
  }
  
  get columns() {
    let columnArray = [];

    for (let i = 0; i < this.matrixArr[0].length; i++) {
      columnArray[i] = [];
      for (let j = 0; j < this.matrixArr.length; j++) {
        columnArray[i][j] = this.matrixArr[j][i];
      }
    }
    return columnArray;
  }
  
  get rows() {
    return this.matrixArr;
  }
}
