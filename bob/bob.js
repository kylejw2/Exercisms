//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const str = message.trim();
  let allCaps;
  let lackadaisicalTeenager = /kiss|make out/gi.test(str) ? true : false;
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/i.test(str[i]) && /[a-z]/.test(str[i])) {
      allCaps = false;
      break;
    } else if (/[a-z]/i.test(str[i]) && /[A-Z]/.test(str[i])) {
      allCaps = true;
    }
  }
  if (lackadaisicalTeenager) {return 'Whatever.'}
  else if ('?' === str[str.length - 1] && allCaps) {return 'Calm down, I know what I\'m doing!'}
  else if ('?' === str[str.length - 1]) {return 'Sure.'}
  else if (str === '') {return 'Fine. Be that way!'}
  else if ('!' === str[str.length - 1] || allCaps) {return 'Whoa, chill out!'}
  else {return 'Whatever.'}
};
