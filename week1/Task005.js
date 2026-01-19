//create a program to find the largest and smallest number among three numbers
let a = 3;
let b = 40;
let c = -9;

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

/*

// another method with arrays

let numbers = [3, 9, 5];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i]; // 9  
  }
  if (numbers[i] < smallest) { // 3 
    smallest = numbers[i]; 
  }
} 

*/