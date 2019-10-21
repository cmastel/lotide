// takeUntil will return a slice of the array with elements taken from 
// the beginning. It should keep going until the callback returns
// a truthy value.
const takeUntil = function(array, callback) {
  const results = [];

  let n = 0;
  // use while loop to iterate through array until
  // the callback function returns false
  while (!callback(array[n])) {
    results.push(array[n]);
    n++;
  }

  return results;
}

module.exports = takeUntil;
