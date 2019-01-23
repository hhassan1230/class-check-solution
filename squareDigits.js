// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  //may the code be with you
  var finalSum = [];
  var numArray = num.toString().split("");
  for (var i = 0; i < numArray.length; i++) {
  	var currentNum = parseInt(numArray[i]);
  	finalSum.push(currentNum*currentNum);
  }
  return parseInt(finalSum.join("").replace(",", ""));
}
