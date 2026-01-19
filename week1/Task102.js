// create a functions that calculatesthe first n natural nubers like input 5 output 15
function sumOfNaturalNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) { //  loop from 1 to n   

    sum += i; // add i to sum in each iteration  also can be written as sum = sum + i   
  }
  return sum; // return the final sum
}

console.log(sumOfNaturalNumbers(5)); // Output: 15
console.log(sumOfNaturalNumbers(10)); // Output: 55
console.log(sumOfNaturalNumbers(20)); // Output: 210