const findKeyByValue = function(object, value) {
  let result; // define empty result so that it is undefine if no match found

  for (var genre in object) { // loop through the object
    if (object[genre] === value) {
      result = genre;
    }
  }

  return result;
};

module.exports = findKeyByValue;
