// create a function that adds two numbers and returns the result
function addNumber(a , b )
{
  return a + b;
}
console.log(addNumber(1, 3)); 
console.log(addNumber(2,3));

// create a function that reverse a string and returns the result 


function reverseString(str) {
    // Convert string to array (strings are immutable in JS)
    const chars = str.split('');

    for (let left = 0, right = chars.length - 1; left < right; left++, right--) {
        // swap
        const temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;
    }

    // Convert back to string
    return chars.join('');
}

// Example
console.log(reverseString("hello")); // olleh





function findLargest(numbers) {
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}
// Example
console.log(findLargest([3, 5, 2, 8, 1])); // 8