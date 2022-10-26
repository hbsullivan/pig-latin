const vowelArray = ["a","e","i","o","u"];

function convertToArrayAndCheck(text) {
  let textArray = text.split(" ");
  console.log(textArray);
  for (let i = 0; i < textArray.length; i += 1) {
    firstLetter = textArray[i].charAt(0);
    if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
      vowelWord = textArray[i] + "way";
      textArray[i] = vowelWord;
      console.log(vowelWord);
    } else {
      consonantWord = textArray[i];
      textArray[i] = consonantChange(consonantWord)
    }
  }
}

function consonantChange(consonantWord) {
  // let letterArray = consonantWord.split("");
  if (consonantWord.charAt(0) === "q" && consonantWord.charAt(1) === "u") {
    let preFix =  consonantWord.slice(0, 2);
    console.log(preFix);
  } else if (consonantWord.charAt(1) === "q" && consonantWord.charAt(2) === "u") {
    let preFix =  consonantWord.slice(0, 2);
    pigLatinWord = consonantWord + preFix + "ay";
  } 
    textArray[i]= consonantWord + preFix + "ay";
    console.log(pigLatinWord);
}


