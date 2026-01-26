// write a funtio that could find the large number in an arryy of numbers


function findLargestNumber(arr) {
    let largest = arr[0]; // assume first element is the largest

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // update largest if current element is greater
        }
    }

    return largest;
}

let numbers = [34, 67, 23, 89, 12, 90, 45];
console.log("The largest number is: " + findLargestNumber(numbers)); // Output: The largest number is: 90   



