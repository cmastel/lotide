const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


// TEST CODE
const trial1 = "lighthouse in the house";

const trialCount = countLetters(trial1);

assertEqual(trialCount['l'], 1);
assertEqual(trialCount['i'], 2);
assertEqual(trialCount['n'], 1);
