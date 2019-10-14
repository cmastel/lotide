const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};


// TEST CODE
const trialArray = ["Hello", "Lighthouse", "Labs"];
let tailArray = tail(trialArray);
const correctArray = ["Lighthouse", "Labs"];
assertEqual(tailArray, correctArray);
assertEqual(tailArray.join(), correctArray.join());

const numbers = [5, 6, 10, 2];
let tailNumbers = tail(numbers);
const expectedNumbers = [6, 10, 2];
assertEqual(tailNumbers.join(), expectedNumbers.join());