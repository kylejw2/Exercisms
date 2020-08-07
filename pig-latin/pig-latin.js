export class translator {
  static translate(str) {
    const phrase = str.split(' ');
    const words = phrase.map(element => {
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      const isVowel = (element) => element === str[0];
      let pigWord = element;
      if (vowels.findIndex(isVowel) > -1 || pigWord.search('xr') === 0 || pigWord.search('yt') === 0) {
        return pigWord += 'ay';
      }
      while(pigWord.search(/[^aeiou]/i) === 0) {
        if (pigWord.search('qu') === 0) {
          pigWord = pigWord.substr(2);
          pigWord += 'qu';
          break
        }
        const firstLetter = pigWord[0];
        pigWord = pigWord.substr(1);
        pigWord += firstLetter;
        if (pigWord.search('y') === 0) {break;}
      }
      return pigWord += 'ay';
    })
    const numWords = words.length;
    return words.reduce((accumulator, element, index) => {
      if (index !== numWords - 1) {
        return accumulator + element + ' ';
      }
      else {return accumulator + element}
    }, '');
  }
}
