// write a fuction that could find the cont occurrence of an element in an array 

function countOccurrences(arr, element) {               
    let count = 0; // initialize count to 0
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++; // increment count if element is found
        }
    }
    return count;
}

let numbers = [10, 20, 30, 40, 50, 30, 30];
let elementToCount = 30;

console.log("The element " + elementToCount + " occurs " + countOccurrences(numbers, elementToCount) + " times in the array."); // Output: The element 30 occurs 3 times in the array.

    