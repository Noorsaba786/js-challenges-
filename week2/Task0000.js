//  write a function that counts the number of vowels in a given string

function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase(); // convert character to lowercase for uniformity

    // check if the character is a vowel
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++; // increment count if vowel is found
    }
  }
  return count; // return the total count of vowels
}
// or if we want to write it winout convertin it to lowe case in this case we need to check for both upper and lower case
/*
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
       
        // check if the character is a vowel
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||                     
        if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++; // increment count if vowel is found
        }
    return count; // return the total count of vowels
}
*/
// Example usage:

console.log(countVowels("Hello muzhgan jan qandm")); // Output: 3
