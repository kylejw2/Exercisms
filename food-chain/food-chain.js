//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { basename } from "path";

export class Song {
  lyrics = [
    {
      animal: `fly`,
      unique: ``
    },
    {
      animal: `spider`,
      unique: `It wriggled and jiggled and tickled inside her.
`
    },
    {
      animal: `bird`,
      unique: `How absurd to swallow a bird!
`
    },
    {
      animal: `cat`,
      unique: `Imagine that, to swallow a cat!
`
    },
    {
      animal: `dog`,
      unique: `What a hog, to swallow a dog!
`
    },
    {
      animal: `goat`,
      unique: `Just opened her throat and swallowed a goat!
`
    },
    {
      animal: `cow`,
      unique: `I don't know how she swallowed a cow!
`
    },
    {
      animal: `horse`,
      unique: `She's dead, of course!
`
    },
  ]

  verse(num) {
    const base = `I don't know why she swallowed the fly. Perhaps she'll die.
`
    const index = num - 1;
    const animal = this.lyrics[index].animal;

    let song = `I know an old lady who swallowed a ${animal}.
`;

    if (animal === `horse`) {return song += this.lyrics[index].unique}

    song += this.lyrics[index].unique;
    for (let i = index; i > 0; i--) {
      if (this.lyrics[i-1].animal === `spider`) {song += `She swallowed the ${this.lyrics[i].animal} to catch the ${this.lyrics[i-1].animal} that wriggled and jiggled and tickled inside her.
`}
      else {song += `She swallowed the ${this.lyrics[i].animal} to catch the ${this.lyrics[i-1].animal}.
`;}
    }
    song += base;
    return song;
  }

  verses(min, max) {
    let myVerses = ``;
    for (let i = min; i <= max; i++) {
      myVerses += this.verse(i) + `
`;
    }
    return myVerses;
  }
}