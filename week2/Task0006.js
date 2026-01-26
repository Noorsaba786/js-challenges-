// write a  fucnion that could check if an array contais a sepcific element or not

function containsElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true; // element found
        }
    }
    return false; // element not found
}

let numbers = [10, 20, 30, 40, 50];
let elementToFind = 30;

if (containsElement(numbers, elementToFind)) {
    console.log(elementToFind + " is found in the array.");
} else {
    console.log(elementToFind + " is not found in the array.");
}   