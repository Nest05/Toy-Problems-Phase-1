// Speed Detector
// Start of with speed limit as a constant cause it doesn't change
const speedLimit = 70;
// Function to determine demerit points
function calculateDemeritPoints(speed){
    let overSpeed = speed - speedLimit;
    let demeritPoints = 0;

      if (speed < speedLimit){
        return 'Ok';
      }

      if (overSpeed >= 5){
        demeritPoints += Math.floor(overSpeed / 5);
      }
// Math.floor is used to round down and return largest integer.
     if(demeritPoints > 12){
        return 'License suspended';
      }

      return 'Points:' + demeritPoints;
}
console.log(calculateDemeritPoints(150));
// Function to prompt on browser
function showDemPoints(){
    const entSpeed = parseInt(prompt ('Enter speed'));
    const demPoints = calculateDemeritPoints(entSpeed);
    alert(`${demPoints}!`);
}