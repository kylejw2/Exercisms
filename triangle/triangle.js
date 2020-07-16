//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  isEquilateral() {
    if (this.checkConditions() && this.side1 === this.side2 && 
      this.side1 === this.side3) {
      return true;
    } else {
      return false;
    }
  }

  isIsosceles() {
    if (this.checkConditions() && (this.side1 === this.side2 ||
      this.side2 === this.side3 || this.side3 === this.side1)) {
        return true;
      } else {
        return false;
      }
  }

  isScalene() {
    if (this.checkConditions() && !this.isIsosceles()) {
      return true;
    } else {
      return false;
    }
  }

  checkConditions() {
    if (this.side1 + this.side2 > this.side3 &&
      this.side2 + this.side3 > this.side1 &&
      this.side3 + this.side1 > this.side2) {
        return true;
    } else {
      return false;
    }
  }
}
