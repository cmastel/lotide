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

module.exports = middle;




