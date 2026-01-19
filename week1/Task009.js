// create a fuctnion that converts seconds to hours, minutes and seconds
// well the formula is simple we know that 1 hour = 3600 seconds and 1 minute = 60 seconds  

let totalSeconds = 3665;
// here parseItn is used to convert float numbers to integer numbers
let hours = parseInt(totalSeconds / 3600);
let remainingSeconds = totalSeconds % 3600;

let minutes = parseInt(remainingSeconds / 60);
let seconds = remainingSeconds % 60;

console.log(hours + " hr, " + minutes + " min, " + seconds + " sec");
 

