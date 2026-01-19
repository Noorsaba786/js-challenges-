// create a function  to swap two variables without using a temporary variable

let a = 5;
let b = 10;

a = a + b; // a now becomes 15 (5 + 10) 
b = a - b;  // b becomes 5  (15 - 10). 
a = a - b;  // a becomes 10 (15 - 5)

console.log("a =", a);
console.log("b =", b);
