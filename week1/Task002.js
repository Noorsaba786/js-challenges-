// write a function that takes an array and revesrs it  
// here i wanna use mirrior method to reverse the array

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr;
}
 // here is the example
    
  console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]


// but if i wanna reverse a stiring using the same mirrior method i used in the previous task without using  bulit in methods so i would write it like this 

function reverseString(str) {
  let arr = [];

  // here i copy the string into an array 
  for (let i = 0; i < str.length; i++) {
    arr[i] = str[i];
  }

  // my same mirrior method to reverse the array
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  // build string back
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]; // concatenate each character to form the reversed string  
  }

  return result;
}

// Example
console.log(reverseString("hello")); // Output: "olleh"