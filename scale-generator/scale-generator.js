//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { start } from "repl";

export class Scale {
  constructor(tonic) {
    this._flats = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
    this._sharps = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    this._useSharps = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'a', 'e', 'b', 'f#', 'c#', 'g#', 'd#'];
    this._useFlats = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'd', 'g', 'c', 'f', 'bb', 'eb'];
    this._tonic = tonic;
  }

  chromatic() {
    let tonicScalePosition;
    if (this._useSharps.indexOf(this._tonic) > -1) { 
      tonicScalePosition = this._sharps.indexOf(this._tonic);
      return (this._sharps.slice(tonicScalePosition)).concat(this._sharps.slice(0, tonicScalePosition));
    } else {
      tonicScalePosition = this._flats.indexOf(this._tonic);
      return (this._flats.slice(tonicScalePosition)).concat(this._flats.slice(0, tonicScalePosition));
    }
  }
// Yes, this code is sloppy and I should create another function to reuse the same code. It's the end of the day and I need a break.
  interval(intervals) {
    let myTonic = this._tonic; 
    const scale = [];
    let counter = 0;
    if (this._useSharps.indexOf(myTonic) > -1) { 
      if (this._tonic.length === 2) {
        myTonic = this._tonic[0].toUpperCase() + this._tonic[1];
      } else {
        myTonic = this._tonic.toUpperCase();
      }
      let startingPoint = this._sharps.indexOf(myTonic);
      for (let i = 0; i < intervals.length; i++) {
        startingPoint += counter;
        if (startingPoint === 12) {
          startingPoint = 0;
        } else if (startingPoint === 13) {
          startingPoint = 1;
        } else if (startingPoint === 14) {
          startingPoint = 2;
        }
        scale.push(this._sharps[startingPoint]);
        if (intervals[i] === 'm') {counter = 1;}
        else if (intervals[i] === 'M') {counter = 2}
        else {counter = 3}
      }
    } else {
      if (this._tonic.length === 2) {
        myTonic = this._tonic[0].toUpperCase() + this._tonic[1];
      } else {
        myTonic = this._tonic.toUpperCase();
      }
      let startingPoint = this._flats.indexOf(myTonic);
      for (let i = 0; i < intervals.length; i++) {
        startingPoint += counter;
        if (startingPoint === 12) {
          startingPoint = 0;
        } else if (startingPoint === 13) {
          startingPoint = 1;
        } else if (startingPoint === 14) {
          startingPoint = 2;
        }
        scale.push(this._flats[startingPoint]);
        if (intervals[i] === 'm') {counter = 1;}
        else if (intervals[i] === 'M') {counter = 2}
        else {counter = 3}
      }
    }
    return scale;
  }
}
