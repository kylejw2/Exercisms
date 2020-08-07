export const isValid = (str) => {
  const regex = /X|[0-9]/g;
  const isbn = str.match(regex);
  const isX = (element) => {element === 'X'};
  if (isbn === null || isbn.length !== 10 || (isbn.find(isX) > -1 && isbn.find(isX) < 9)) {
    return false;
  }
  let decrementer = 10;
  let count = 0;
  for (let i = 0; i < isbn.length; i++) {
    if (isbn[i] === 'X') {
      count += (10 * decrementer);
      break;
    }
    count += (isbn[i] * decrementer);
    decrementer--;
  }
  if (count % 11 === 0) {return true}
  return false;
};
