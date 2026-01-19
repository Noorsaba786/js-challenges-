
// create a funtion that print even numbers between 1 to n like in range 
// the idea is to loop from 1 to n and check if the number is even or not
let start = 1;
let end = 10;

for (let i = start; i <= end; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
