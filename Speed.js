//The Speed Limit = 70km/h
//5km/h >70km/h = 1 demerit point,print number of demerits
//12 point => suspended
checkSpeed(180);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
  
    if (speed < speedLimit + kmPerPoint) {
      console.log("Ok");
      return;
    }
  
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log("License suspended");
    else console.log("Points", points);
  }
  
  