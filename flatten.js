const flatten = function(array) {
  let flatArray = [];

  // iterate through all elements in array
  for (let i = 0; i < array.length; i++) {
    // if element is not an array, add it to flatArray
    if (!Array.isArray(array[i])) {
      flatArray.push(array[i]);
    } else {
      // if element is an array, create subArray and iterate through that
      // adding elements to flatArray
      let subArray = array[i];
      for (let j = 0; j < subArray.length; j++) {
        flatArray.push(subArray[j]);
      }
    }
  }

  return flatArray;
};

module.exports = flatten;
