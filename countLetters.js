const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(stringToCount) {
  let letterCount = {}

  return letterCount;
};


// TEST CODE
const trial1 = "lighthouse in the house";

const trialCount = countLetters(trial1);

assertEqual(trialCount['l'], 1);
assertEqual(trialCount['i'], 2);
assertEqual(trialCount['n'], 1);
