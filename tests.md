Steps - 

1. Break the string down into words

Describe: convertToArrayAndCheck();

Test: "It coverts string to Array"
Code: convertToArray("CATS CATERED THE EVENT");
text: "CATS CATERED THE EVENT"
Expected Output: ["CATS", "CATERED", "THE", "EVENT"]

Test: "Checks if the first letter of the element is a vowel"
Code: convertToArrayAndCheck("CATS CATERED THE EVENT");
text: "CATS CATERED THE EVENT"
Expected Output: False (for element "CAT")


 
3. Pass it into either the vowel function or the consonant function.

Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

 a. Vowel
  1. for loop on array of letters to add "way" to the end of the array
 b. Consonant
  1. break word into an array
  2. for loop to determine index where first vowel is located
  3. if statement to determine if word starts with "qu"
  4. spliceConsonant at first vowel
  5. append spliceConsonant to end + ay
4. join output from vowel/consonant function