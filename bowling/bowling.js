export class Bowling {
  constructor() {
    this._score = 0;
    this.gameOver = false;
    this.frame = 1;
    this.lastRoll = 0;
    this.secondLastRoll = 0;
    this.thirdLastRoll = 0;
    this.firstShot = true;
    this.onSpare = false;
    this.onStrike = false;
    this.secondBowlLastFrame = false;
    this.thirdBowlLastFrame = false;
  }

  roll(pins) {
    if (pins < 0) {
      throw new Error('Negative roll is invalid');
    }
    if (pins > 10 || (!this.firstShot && this.lastRoll + pins > 10)) {
      throw new Error('Pin count exceeds pins on the lane')
    }
    if (this.gameOver) {
      throw new Error('Cannot roll after game is over')
    }

    const checkSpare = () => {
      if (!this.onSpare) {return;}
      this._score += 10 + pins;
      this.onSpare = false;
    }

    const checkStrike = () => {
      if (!this.onStrike) {return;}
      if (this.secondLastRoll === 10) {
        this._score += 10 + this.lastRoll + pins;
        this.secondLastRoll = this.lastRoll;
        this.lastRoll = pins;
        if (this.secondLastRoll === 10 || this.lastRoll === 10) {
          return;
        }
        this.onStrike = false;
      } else {
        this.secondLastRoll = 10;

      }
    }

    // Manage the tenth frame
    if (this.frame === 10) {
      if (this.thirdBowlLastFrame) {
        this.gameOver = true;

      } else if (this.secondBowlLastFrame) {

        if (this.lastRoll === 10 || pins + this.lastRoll === 10) {
          this.thirdBowlLastFrame = true;

        } else {
          this.gameOver = true;
        }

      } else {
        this.secondBowlLastFrame = true;

      }
    }


    // if open frame
    if (!this.firstShot && pins + this.lastRoll !== 10) {
      if (!this.thirdBowlLastFrame) {
        this._score += pins + this.lastRoll;
      }
      if (this.frame !== 10) {
        this.frame++;
        this.firstShot = true;
      }
      checkStrike();
      return;

    } else if (this.firstShot && pins !== 10) {
      checkSpare();
      checkStrike();
      this.lastRoll = pins;
      this.firstShot = false;
      return;

    } 
    // else if spare
    else if (!this.firstShot && pins + this.lastRoll === 10) {
      checkStrike();
      if (this.frame !== 10) {
        this.frame++;
      }
      this.onSpare = true;
      this.firstShot = true;
      this.lastRoll = pins;
      return;

    } 
    // else if Strike
    else if (this.firstShot && pins === 10) {
      checkSpare();
      checkStrike();
      this.onStrike = true;
      this.secondLastRoll = this.lastRoll;
      this.lastRoll = 10;
      if (this.frame !== 10) {
        this.frame++;
      }
      return;

    }
  }

  score() {
    if (this.gameOver) {
      return this._score;
    } else {
      throw new Error('Score cannot be taken until the end of the game')
    }
  }
}
