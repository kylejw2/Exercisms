//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (potentialPangram) => {
  const str = potentialPangram.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (str[i] === alphabet[j]) {
        alphabet = alphabet.replace(alphabet[j], '');
        break;
      }
    }
  }

  if (alphabet === "") {
    return true;
  } else {
    return false;
  }
};
