// create the funciton of fibonacci series up to n terms

// the idea is each num  : is the sum of previous two numbers like 
// 0 1 1 2 3 5 8 13 21 .... so we need to loop from 0 to n and in each iteration we calculate the next number by adding previous two numbers

let n = 7;

let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 3; i <= n; i++) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
}
