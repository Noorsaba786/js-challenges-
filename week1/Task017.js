// create a function that calcultes the sul of naural numbers up to a given number
function sumofNaturalNumbers() {
    let  sum = 0;   
    for (let i = 1; i <= 10; i++) {
        sum += i; 
    }
    return sum;
}
console.log(sumofNaturalNumbers());     
// Output: 55       

// and if the given number is dynamic
function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumUpTo(10)); // 55
console.log(sumUpTo(5));  // 15
console.log(sumUpTo(20)); // 210        
// Output: 55   





// Output: 55                       