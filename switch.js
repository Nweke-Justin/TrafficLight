let trafficLight=prompt("pls insert any of the traffic light colours");
let colour;
let colour1="red";
let colour2="yellow";
let colour3="green";
// console.log(trafficLight);
switch (trafficLight){
  case trafficLight=colour1:
    colour="STOP!";
    break;
  case trafficLight=colour2:
    colour="GET READY!";
    break;
  case trafficLight=colour3:
    colour="GO!";
    break;
    default:
      colour="Pls insert a traffic light colour";
}
console.log(colour)