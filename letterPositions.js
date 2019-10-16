const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(array1, array2) {
  // first check if arrays are equal length
  if (array1.length === array2.length) {
    // iterate through each value in the (equal length) arrays
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false; // return false as soon as one pair does not match
      }
    }
    return true; // return true if the for loop is able to finish (i.e. no unmatched pairs)
  } else {
    // if arrays are not equal length, return false
    return false;
  }
};

const letterPositions = function(sentence) {
  let results = {};

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  console.log("results:", results);
  return results;
};


// TEST CODE

const testString = 'hello';
const testPosition = letterPositions(testString);
console.log("testPosition:", testPosition);

assertArraysEqual(testPosition['h'], [0]); 
assertArraysEqual(testPosition['e'], [1]);
assertArraysEqual(testPosition['l'], [2, 3]);
assertArraysEqual(testPosition['o'], [4]);
