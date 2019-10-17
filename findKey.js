// findKey scans the object, and returns the first key for which
// the callback returns a truthy value
// if no key is found, it returns undefined
const findKey = function(object, callback) {
  let result; // will return undefined if no key found

  for (var item in object) { // loop through the object
    if (callback(object[item])) { 
      // if object[item] matches the callback function
      result = item; 
      return result;
    }
  }
  return result;
}


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE

let result1 = findKey({
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Ora": {stars: 2},
  "Akelarre": {stars: 3},
}, x => x.stars === 2);
assertEqual(result1, 'noma');

console.log('---');

let result2 = findKey({
  key1: 'blue',
  key2: 'red',
  key3: 'green',
  key4: 'red'
}, x => x === 'red');
console.log(result2);
assertEqual(result2, 'key2');