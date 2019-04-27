// This is the JavaScript for the Regular Challenge homework to square a number entered by a user
function squareCalc() {
  let input = prompt('Enter the number to SQUARE');
  let result = 0;

  result = Math.pow(input, 2);

  alert(result);
}

// This is the JavaScript for the Extra Challenge homework to multiply two numbers entered by a user
function multiplyCalc() {
  let inputOne = prompt('Enter FIRST number to MULTIPLY');
  let inputTwo = prompt('Enter SECOND number to MULTIPLY');
  let result = 0;

  result = (inputOne * inputTwo);

  alert(result);
}
