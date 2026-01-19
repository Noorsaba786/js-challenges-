//crreate a fucntion that finds the largest number in an array 
function findLargest(numbers) {
    let max = 0; 

    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}
// Example
console.log(findLargest([30, 5, 2, 8, 1])); // 8


/* Muzhgan's Code 
function largest(...list) {
  console.log(list);
  let max = 0;
  for (let i = 0; i <= list.length - 1; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }
  return max;
}
console.log(largest(20, 50, 70, 2, 80, 100));

*/ 