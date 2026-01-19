// create a funtion that reverse  just a number we coudl use mirror method 
function reverseNumber(num) {
  let str = num.toString(); // convert number to string
  let arr = [];

  // copy string into an array
  for (let i = 0; i < str.length; i++) {
    arr[i] = str[i];
  }

  // mirror method to reverse the array
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;    


}  


// build reversed string back to number
  let reversedStr = "";
  for (let i = 0; i < arr.length; i++) {
    reversedStr += arr[i]; // concatenate each character to form the reversed string  
  }

  return parseInt(reversedStr); // convert reversed string back to number
}

// Example
console.log(reverseNumber(1000)); // Output: 54321 