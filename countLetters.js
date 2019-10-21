const countLetters = function(stringToCount) {
  // inputs: stringToCount --> any type of string
  let letterCount = {}

  // iterate through each item in stringToCount
  for (letter of stringToCount) {
    if (letter !== " ") { // don't count spaces
      if (letterCount[letter]) {
        letterCount[letter] += 1; // increase count of existing letter
      } else {
        letterCount[letter] = 1; // add new letter to letterCount, set at 1
      }
    }
  }

  return letterCount;
};

module.exports = countLetters;
