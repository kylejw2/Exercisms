//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  let ageOnPlanet;
  const calculateEarthYears = (seconds) => {
    return (seconds / 60 / 60 / 24 / 365.25).toFixed(2);
  }
  switch(planet) {
    case "earth":
      ageOnPlanet = calculateEarthYears(seconds);
      break;
    case "jupiter":
      ageOnPlanet = calculateEarthYears(seconds) / 11.862615;
      break;
    case "mars":
      ageOnPlanet = calculateEarthYears(seconds) / 1.8808158;
      break;
    case "neptune":
      ageOnPlanet = calculateEarthYears(seconds) / 164.79132;
      break;
    case "saturn":
      ageOnPlanet = calculateEarthYears(seconds) / 29.447498;
      break;
    case "venus":
      ageOnPlanet = calculateEarthYears(seconds) / 0.6153;
      break;
    case "uranus":
      ageOnPlanet = calculateEarthYears(seconds) / 84.016846;
      break;
    case "mercury":
      ageOnPlanet = calculateEarthYears(seconds) / 0.2408467;
      break;
  }
  if (typeof ageOnPlanet === "number") {
    return +ageOnPlanet.toFixed(2);
  }
  return +ageOnPlanet;
};