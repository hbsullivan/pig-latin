const vowelArray = ["a","e","i","o","u"];

function convertToArrayAndCheck(text) {
  let textArray = text.split(" ");
  console.log(textArray);
  for (let i = 0; i < textArray.length; i += 1) {
    firstLetter = textArray[i].charAt(0);
    if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
      
        vowelWord = textArray[i] + "way";
        console.log(vowelWord);
      };
  }
}



