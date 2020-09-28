export const recite = (verseMin, verseMax = 0) => {
  const bank =[
    {
      verse: 'a Partridge in a Pear Tree',
      num: 'first'
    },
    {
      verse: 'two Turtle Doves',
      num: 'second'
    },
    {
      verse: 'three French Hens',
      num: 'third'
    },
    {
      verse: 'four Calling Birds',
      num: 'fourth'
    },
    {
      verse: 'five Gold Rings',
      num: 'fifth'
    },
    {
      verse: 'six Geese-a-Laying',
      num: 'sixth'
    },
    {
      verse: 'seven Swans-a-Swimming',
      num: 'seventh'
    },
    {
      verse: 'eight Maids-a-Milking',
      num: 'eighth'
    },
    {
      verse: 'nine Ladies Dancing',
      num: 'ninth'
    },
    {
      verse: 'ten Lords-a-Leaping',
      num: 'tenth'
    },
    {
      verse: 'eleven Pipers Piping',
      num: 'eleventh'
    },
    {
      verse: 'twelve Drummers Drumming',
      num: 'twelfth'
    },
  ]

  if (verseMax !== 0) {
    let songs = '';
    for (let i = verseMin; i <= verseMax; i++) {
      songs += recite(i);
      songs += i !== verseMax ? '\n' : '';
    }
    return songs;
  } else {
    let song = `On the ${bank[verseMin - 1].num} day of Christmas my true love gave to me:`;
    for (let i = verseMin - 1; i >= 0; i--) {
      song += ` ${bank[i].verse}`;
      song += i === 0 ? '.\n' : 
        i === 1 ? ', and' : ',';
    }
    return song;
  }    
};
