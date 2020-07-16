//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {

  let myPhrase = phrase.replace(/,|\.|:|!|@|\$|%|&|\^|\n/g, ' ');
  myPhrase = myPhrase.replace(/amp;/g, ' ');
  const wordCount = {};
  while (myPhrase.indexOf('  ') > -1) {
    myPhrase = myPhrase.replace('  ', ' ');
  }
  for (let i = 0; i < myPhrase.length; i++) {
    if (myPhrase[i] === "'" && myPhrase[i] === myPhrase.length - 1) {
      myPhrase = myPhrase.slice(0, myPhrase[i]);
      break;
    }
    if (myPhrase[i] === "'" && myPhrase[i+1] !== 't') {
      myPhrase = myPhrase.slice(0, i) 
      + myPhrase.slice(i + 1, myPhrase.length);
    }
    if (myPhrase[i] === "'" && myPhrase[i+1] === 't' && myPhrase[i+2] !== ' ') {
      myPhrase = myPhrase.slice(0, i) 
      + myPhrase.slice(i + 1, myPhrase.length);
    }
  }
  myPhrase = myPhrase.trim();
  myPhrase = myPhrase.toLowerCase();

  myPhrase.split(' ').forEach(word => {
    if (wordCount.hasOwnProperty(word)) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  });

  return wordCount;
};
