//crreate a fucntion that finds the largest number in an array 
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