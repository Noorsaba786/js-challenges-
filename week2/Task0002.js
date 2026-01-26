// write a funcion which pront all numbers that divide the given numer exactly

function printDivisors(num) {
  console.log("Divisors of " + num + " are:");
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      console.log(i);
    }
  }
}

printDivisors(12);
