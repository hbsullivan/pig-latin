Describe: vowelFunction()


Steps - 

1. Break the string down into words
2. Identify if it starts with a vowel or a consonant.
 a. if charAt(0)===vowel
3. Pass it into either the vowel function or the consonant function.
 a. Vowel
  1. for loop on array of letters to add "way" to the end of the array
 b. Consonant
  1. break word into an array
  2. for loop to determine index where first vowel is located
  3. if statement to determine if word starts with "qu"
  4. spliceConsonant at first vowel
  5. append spliceConsonant to end + ay
4. join output from vowel/consonant function