//  i want to create a funtion that coould generate a  200   numbe  betwwenn 10 and 99 and then with use of use of loop compare the i if its less than i+1 then swap them

function generateRandomNumbers() {
  let myArray = new Array(200);
  for (let i = 0; i < myArray.length; i++) {
    myArray[i] = Math.floor(Math.random() * 90) + 10; // generate random number between 10 and 99
  }
  console.log("generte numbers ", myArray);

  for (let j = 0; j < myArray.length; j++) {
    for (i = 0; i < myArray.length - j - 1; i++) {
      if (myArray[i] < myArray[i + 1]) //  index 0 = 2
      // index 1 = 3
      {
        let tmp = myArray[i]; // tmp = 2
        myArray[i] = myArray[i + 1]; // index 0 = 3
        myArray[i + 1] = tmp; // index 1 = 2
      }
    }
  }
  console.log("after sorting ", myArray);
}
generateRandomNumbers();
