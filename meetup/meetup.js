//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetup = (year, month, key, day) =>  {
  const keyBank = {
    first: [1, 2, 3, 4, 5, 6, 7],
    second: [8, 9, 10, 11, 12, 13, 14],
    third: [15, 16, 17, 18, 19, 20, 21],
    fourth: [22, 23, 24, 25, 26, 27, 28],
    fifth: [29, 30, 31],
    last: [25, 26, 27, 28, 29, 30, 31],
  }
  const dayBank = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let correctDay, filter;
  // Watch for leap years
  if (key === 'last' && month === 2 && year % 4 === 0) {filter = [23, 24, 25, 26, 27, 28, 29]}
  // February has an unordinary last week
  else if (key === 'last' && month === 2) {filter = [22, 23, 24, 25, 26, 27, 28]}
  else if (keyBank.hasOwnProperty(key)) {filter = keyBank[key];}
  else {filter = [13, 14, 15, 16, 17, 18, 19];}
  const myDay = dayBank.findIndex(ele => ele === day);
  for (let i = 0; i < filter.length; i++) {
    const day = new Date(year, month - 1, filter[i]);
    if (day.getDay() === myDay) {correctDay = filter[i]; break;}
  }
  return new Date(year, month - 1, correctDay)
}
