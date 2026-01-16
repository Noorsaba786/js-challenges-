
// function to calculate simple and compound interest
let P = 1000;
let R = 5;
let T = 2;

let SI = (P * R * T) / 100;
let CI = P * (Math.pow(1 + R / 100, T) - 1);

console.log("Simple Interest:", SI);
console.log("Compound Interest:", CI);
