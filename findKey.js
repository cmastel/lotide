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

module.exports = findKey;
