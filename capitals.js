// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
	// Write your code here (/[a-z]/.test(str));
  var finalArray = [];
  var splitWords = word.split("");
  for (var i = 0; i < splitWords.length; i ++) {
    var letter = splitWords[i];
    if (/[A-Z]/.test(letter)) {
      finalArray.push(i);
    }
  }
  return finalArray;
};
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
