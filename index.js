// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const hqStreet = 42; 
    return Math.abs(someValue - hqStreet);
  }
function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feet = blocks * 264;
    return feet;
  }
function distanceTravelledInFeet(start, destination) {
    const distanceFromStart = distanceFromHqInFeet(start);
    const distanceToDestination = distanceFromHqInFeet(destination);
    const distanceTravelled = Math.abs(distanceToDestination - distanceFromStart);
    return distanceTravelled;
  }
  function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination);
  
    if (distanceTravelled <= 400) {
      // The first 400 feet are free
      return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
      // For distance between 400 and 2000 feet, the price is 2 cents per foot
      return (distanceTravelled - 400) * 0.02;
    } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {

      return 25;
    } else {

      return 'cannot travel that far';
    }
  }