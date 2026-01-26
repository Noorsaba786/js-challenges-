// write a funtio that could find the smallest  number in an arryy of numbers

function findLargestNumber(arr) {
  let largest = arr[0]; // assume first element is the largest

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < largest) {
      largest = arr[i]; // update largest if current element is greater
    }
  }

  return largest;
}

let numbers = [34, 67, 23, 89, 12, 90, 45];
console.log("The smallest number is: " + findLargestNumber(numbers)); // Output: The smallest number is: 12

/*

// 7. Write a function to find the sum of all elements in an array
// Description: Calculate the total sum of all array elements.

const getSum = function (arr) {
  let sum = 0;
  for (const el of arr) {
    sum += el;
  }
  return sum;
};
console.log(getSum([1, 2, 3, 4, 5]));
*/
