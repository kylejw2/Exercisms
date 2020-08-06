//
// This is only a SKELETON file for the 'House' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class House {
  static verse(num, arr = []) {
    const bank = [
      {
        noun: 'house that Jack',
        verb: 'built'
      },
      {
        noun: 'malt',
        verb: 'lay in'
      },
      {
        noun: 'rat',
        verb: 'ate'
      },
      {
        noun: 'cat',
        verb: 'killed'
      },
      {
        noun: 'dog',
        verb: 'worried'
      },
      {
        noun: 'cow with the crumpled horn',
        verb: 'tossed'
      },
      {
        noun: 'maiden all forlorn',
        verb: 'milked'
      },
      {
        noun: 'man all tattered and torn',
        verb: 'kissed'
      },
      {
        noun: 'priest all shaven and shorn',
        verb: 'married'
      },
      {
        noun: 'rooster that crowed in the morn',
        verb: 'woke'
      },
      {
        noun: 'farmer sowing his corn',
        verb: 'kept'
      },
      {
        noun: 'horse and the hound and the horn',
        verb: 'belonged to'
      }
    ]
    let song = arr;
    if (num - 1 === 0) {
      song.unshift(`This is the ${bank[num - 1].noun} ${bank[num - 1].verb}.`);
      return song;
    } else {
      song = this.verse(num - 1, song);
      song.unshift(`This is the ${bank[num - 1].noun}`);
      song[1] = song[1].replace(`This is the`, `that ${bank[num - 1].verb} the`);
    }
    return song;
  }

  static verses(start, end, arr = []) {
    const lyrics = arr;
    if (end === start) {
      const song = this.verse(end);
      lyrics.push(...song);
      return lyrics;
    } else {
      this.verses(start, end - 1, lyrics);
      lyrics.push('');
      const song = this.verse(end);
      lyrics.push(...song);
    }
    return lyrics;
  }
}
