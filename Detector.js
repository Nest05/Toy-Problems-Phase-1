// Speed Detector

const speedLimit = 70;

function calculateDemeritPoints(speed){
    let overSpeed = speed - speedLimit;
    let demeritPoints = 0;

      if (speed < speedLimit){
        return 'Ok';
      }

      if (overSpeed >= 5){
        demeritPoints += Math.floor(overSpeed / 5);
      }

     if(demeritPoints > 12){
        return 'License suspended';
      }

      return 'Points:' + demeritPoints;
}
console.log(calculateDemeritPoints(150));

function showDemPoints(){
    const entSpeed = parseInt(prompt ('Enter speed'));
    const demPoints = calculateDemeritPoints(entSpeed);
    alert(`${demPoints}!`);
}