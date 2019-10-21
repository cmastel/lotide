const letterPositions = function(sentence) {
  let results = {};

  // iterate through each item in sentence
  // i keeps track of the current index
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i]; // assign specifc item to letter variable
    if (letter !== " ") { // ignore spaces
      if (results[letter]) {
        results[letter].push(i); // push index position to array
      } else {
        results[letter] = [i]; // create new array with index
      }
    }
  }
  return results;
};

module.exports = letterPositions;
