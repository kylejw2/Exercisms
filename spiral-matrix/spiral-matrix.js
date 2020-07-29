//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { countReset } from "console";

export class SpiralMatrix {
  static ofSize(num) {

    const matrix = new Array(num).fill(null);
    for (let i = 0; i < matrix.length; i++) {
      matrix[i] = new Array(num).fill(null);
    }

    let coords = [0, 0];
    let limitX = [-1, num];
    let limitY = [-1, num];
    let i = 1;

    const updateCell = () => {
      if (matrix[coords[0]][coords[1]] === null) {
        matrix[coords[0]][coords[1]] = i;
        i++;
      } else {
        return;
      }
    }

    while (i <= num*num) {
      // top, going right
      while (coords[1] < limitX[1]) {
        updateCell();
        coords[1]++;
      }
      if (coords[1] === limitX[1]) {coords[0]++; limitY[0]++; coords[1]--;}

      // right, going down
      while (coords[0] < limitY[1]) {
        updateCell();
        coords[0]++;
      }
      if (coords[0] === limitY[1]) {coords[1]--; limitX[1]--; coords[0]--;}

      // bottom, going left
      while (coords[1] > limitX[0]) {
        updateCell();
        coords[1]--;
      }
      if (coords[1] === limitX[0]) {coords[0]--; limitY[1]--; coords[1]++;}

      // left, going up
      while(coords[0] > limitY[0]) {
        updateCell();
        coords[0]--;
      }
      if (coords[0] === limitY[0]) {coords[1]++; limitX[0]++; coords[0]++}
    }
    return matrix;
  }
}