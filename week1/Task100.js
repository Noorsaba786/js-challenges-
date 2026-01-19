// create a function that verifies the triangle inequality theorem lke the tringle if its eauilaterql or isosceles or scalene well equilateral means all sides are equal isosceles means two sides are equal and scalene means no sides are equal

let sideA = 5;
let sideB = 7;
let sideC = 10;

if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
  console.log("The sides form a valid triangle.");
  
  if (sideA === sideB && sideB === sideC) {
    console.log("The triangle is equilateral.");
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    console.log("The triangle is isosceles.");
  } else {
    console.log("The triangle is scalene.");
  }
} else {
  console.log("The sides do not form a valid triangle.");
}       
