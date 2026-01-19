// create a funtions that count digits in a number and find how many digits are there woithout using math log or converting to string


let num = 123;
let sum = 0;

while (num > 0) {  

  sum = sum + (num % 10); // get the last digit and add it to sum using modulas of 10 normally when we do num % 10 we get the last digit
  num = parseInt(num / 10); // remove the last digit from number by dividing it by 10 and using parseInt to get rid of decimal part
}

console.log(sum);
