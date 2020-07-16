//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (legacyObj) => {
  const modernObj = {};

  const keyArray = Object.keys(legacyObj);
  let counter = 0;

  Object.values(legacyObj).forEach( value => {
    for (let i = 0; i < value.length; i++) {
      modernObj[value[i].toLowerCase()] = +keyArray[counter];
    }
    counter++;
  })

  return modernObj;
};
