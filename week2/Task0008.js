// write a fucnion that could find if a number is prime or not

function isPrime(num) {
  if (num <= 1) {
    return false; // numbers less than or equal to 1 are not prime
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // number is divisible by i, hence not prime
    }
  }
  return true; // number is prime
}

let numberToCheck = 29;
if (isPrime(numberToCheck)) {
  console.log(numberToCheck + " is a prime number.");
} else {
  console.log(numberToCheck + " is not a prime number.");
}
