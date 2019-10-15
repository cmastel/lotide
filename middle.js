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

const middle = function(array) {
  let middleArray = []; // default empty array, applies for array lengths <= 2

  if (array.length > 2) {
    // check if the array has an odd number of elements
    if (array.length % 2 !== 0) {
      let middleIndex = (array.length - 1) / 2;
      middleArray.push(array[middleIndex]); // add the single element at the middleIndex of array
    } else {
      // if array has an evern number of elements
      let middleIndex = (array.length) / 2;
      middleArray.push(array[middleIndex - 1]);
      middleArray.push(array[middleIndex]);
    }
  }

  return middleArray;
};


// TEST CODE
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);


