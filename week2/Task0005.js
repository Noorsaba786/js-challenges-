// wrtie a funcion that coudl find the sum of all numers in an array 

function sumOfArray(arr) {
    let sum = 0; // initialize sum to 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // add each element to sum
    }

    return sum;
}

let numbers = [10, 20, 30, 40, 50];
console.log("The sum of all numbers in the array is: " + sumOfArray(numbers)); // Output: The sum of all numbers in the array is: 150           

