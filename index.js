const distanceFromHqInBlocks = (pickupLocation) => {
    
    const hqLocation = 42; // Scuber headquarters is on 42nd Street
    let distance = 0;
  
    if (pickupLocation > hqLocation) {
      distance = pickupLocation - hqLocation;
    } else {
      distance = hqLocation - pickupLocation;
    }
  
    return distance;
  };
  
  const distanceFromHqInFeet = (blocks) => {
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  };
  
  const distanceTravelledInFeet = (startBlock, destinationBlock) => {
    const distanceToDestination = distanceFromHqInBlocks(destinationBlock);
    const distanceFromHqStart = distanceFromHqInBlocks(startBlock);

    // estimate distance travelled based from start to finish
  let distanceTravelled = 0;

  if (destinationBlock > startBlock) {
    distanceTravelled = distanceToDestination - distanceFromHqStart;
  } else {
    distanceTravelled = distanceFromHqStart - distanceToDestination;
  }

  return distanceTravelled * 264;


  //calculateFare function calculates the fare based on the distance travelled.
  const calculateFare = (distanceFromHqInBlocks) => {
    const distance = distanceTravelledInFeet(1, distanceFromHqInBlocks);
  

  const distanceTravelled = distanceTravelledInFeet(startBlock, destinationBlock);

  if (distanceTravelled > 2500) {
    return 'cannot travel that far';
  }

  if (distanceTravelled <= 400) {
    return 0;
  }

  if (distanceTravelled > 400 && distanceTravelled <= 2000) {
    const fare = distanceTravelled - 400;
    return fare * 0.02;
  }

  if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
    return 25;
  }
};
}; 
// output 
console.log(distanceFromHqInBlocks(50)); 
console.log(distanceFromHqInFeet(8)); 
console.log(distanceTravelledInFeet(34, 38)); 
console.log(calculateFare(50, 52)); 
console.log(calculateFare(50, 510)); 
console.log(calculateFare(50, 2100)); 
console.log(calculateFare(50, 2600));
console.log(calculateFare(50, 3000));  
