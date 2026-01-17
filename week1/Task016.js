// create trffic lights funciton using switch case
// input from user can be 'red', 'yellow' or 'green'

let trafficLight = 'yellow';

switch (trafficLight) {                         
    case 'red':         

        console.log("Stop");
        break;
    case 'yellow':
        console.log("Get Ready");
        break;
    case 'green':
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
        break;
}               
