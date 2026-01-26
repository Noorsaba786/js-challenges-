// write a funciton which find the sum of digints of a number 


/*
function sumOfDigits(num) {
  let sum = 0;

  while (num > 0) {  

    sum = sum + (num % 10); // get the last digit and add it to sum using modulas of 10 normally when we do num % 10 we get the last digit
    num = parseInt(num / 10); // remove the last digit from number by dividing it by 10 and using parseInt to get rid of decimal part
  }

  return sum;
}

console.log(sumOfDigits(123)); // Output: 6
console.log(sumOfDigits(4567)); // Output: 22
console.log(sumOfDigits(89012)); // Output: 20

*/

// another simple method using string conversion

function sumOfDigits(num)
{
let sum = 0 ;
let  numToString ; 
    numToString = num.toString();
  
    for(i = 0 ; i< numToString.length ; i++)
    {
       sum += parseInt (numToString[i]) ; 

    }
    return(sum)
}

console.log( sumOfDigits(123));
console.log( sumOfDigits(4567));
console.log( sumOfDigits(89012));