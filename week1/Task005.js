//create a program to find the largest and smallest number among three numbers
let a = 3;
let b = 9;
let c = 5;

let largest = a;
let smallest = a;

if (b > largest) {
  largest = b;
}

if (b < smallest) {
  smallest = b;
}

if (c > largest) {
  largest = c;
}

if (c < smallest) {
  smallest = c;
}

console.log("Largest:", largest);
console.log("Smallest:", smallest);
