//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours = 0, minutes = 0) {
    this._hours = this.calcHours(hours, minutes);
    this._minutes = this.calcMinutes(minutes);
  }

  calcHours(hrs, mins) {
    let extraHrs = 0;
    if (mins < 0) {
      extraHrs = Math.ceil(mins / 60) - 1;
      if (mins % 60 === 0) {extraHrs++;}
    }
    if (mins > 59) {
      extraHrs = Math.floor(mins / 60);
    }
    let hourToReturn = (extraHrs + hrs) % 24;
    while (hourToReturn < 0) {
      hourToReturn += 24;
    }
    return hourToReturn;
  }

  calcMinutes(mins) {
    let minutes = mins % 60;
    while (minutes < 0) {
      minutes += 60;
    }
    return minutes;
  }

  toString() {
    let str = '';
    if (this._hours < 10) {str += `0${this._hours}`;}
    else {str += this._hours;}
    if (this._minutes < 10) {str += `:0${this._minutes}`;}
    else {str += ':' + this._minutes;}
    return str;
  }

  plus(mins) {
    if (mins + this._minutes > 59 || mins + this._minutes < 0) {
      const newMins = mins + this._minutes;
      this._hours = this.calcHours(this._hours, newMins);
      this._minutes = (this._minutes + mins) % 60;
    } else {
      this._minutes = (this._minutes + mins) % 60;
    }
    return this;
  }

  minus(mins) {
    if (this._minutes - mins < 0) {
      let newMins = this._minutes - mins;
      this._hours = this.calcHours(this._hours, newMins);
      while (newMins < 0) {
        newMins += 60;
      }
      this._minutes = newMins;
    } else {this._minutes -= mins;}
    return this;
  }

  equals(clockObj) {
    if (clockObj.toString() === this.toString()) {return true;}
    else {return false;}
  }
}
