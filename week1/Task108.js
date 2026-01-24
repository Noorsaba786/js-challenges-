// create a function that finds the gcd of two numbers using Euclidean algorithm

// the idea is to repeatedly replace the larger number by the remainder of the larger number divided by the smaller number until one of the numbers becomes zero. The other number at that point will be the GCD. here is the foumula : 

let a = 12;
let b = 18;

while (a !== b) {
  if (a > b) {
    a = a - b;
  } else {
    b = b - a;
  }
}

console.log("GCD =", a);
