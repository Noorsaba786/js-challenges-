// create a funciton that find lcm of two numbers
// LCM = (a × b) / GCD
// the idea is to find the maximum of the two numbers and keep checking if it is divisible by both numbers. If it is, then that number is the LCM. If not, increment the number by 1 and repeat the process until we find the LCM.

let x = 12;
let y = 18;

let a = x;
let b = y;

// find GCD
 
while (a !== b) {
  if (a > b) {
    a = a - b;
  } else {
    b = b - a;
  }
}

let gcd = a;
let lcm = (x * y) / gcd;

console.log("LCM =", lcm);
