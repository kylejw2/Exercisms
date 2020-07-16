//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (dateObject) => {
  const gigasecondNum = 1000000000000;
  const momentAfterGigasecond = new Date(Date.parse(dateObject) + gigasecondNum);
  return momentAfterGigasecond;
};
