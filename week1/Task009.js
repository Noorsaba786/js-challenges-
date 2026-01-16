// create a fuctnion that converts seconds to hours, minutes and seconds
let totalSeconds = 3665;

let hours = parseInt(totalSeconds / 3600);
let remainingSeconds = totalSeconds % 3600;

let minutes = parseInt(remainingSeconds / 60);
let seconds = remainingSeconds % 60;

console.log(hours + " hr, " + minutes + " min, " + seconds + " sec");
