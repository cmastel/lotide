const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: %s === %s", actual, expected);
  } else {
    console.log("🚨🚨🚨 Assertion Failed: %s !== %s", actual, expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('1', 1);
