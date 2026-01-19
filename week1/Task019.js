// create a fucntion that check character type if its vowel or consonant digit or special character 

let char = 'A';

if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
  // Check for vowel
  if (
    char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U' ||             
    char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'                                          
      ) {   
        console.log(char + " is a vowel");
    } else {
      console.log(char + " is a consonant");
    }
} else if (char >= '0' && char <= '9') {
  console.log(char + " is a digit");
} else {
  console.log(char + " is a special character");
}