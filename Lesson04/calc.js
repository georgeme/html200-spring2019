// This is the JavaScript for the Regular Challenge homework to square a number entered by a user
function squareCalc() {
  let input = prompt('Enter the number to square');
  let result = 0;

  result = Math.pow(input, 2);

  alert(result);
}

// This is the JavaScript for the Extra Challenge homework to multiply two numbers entered by a user
function multiplyCalc() {
  let inputOne = prompt('Enter first number to multiply');
  let inputTwo = prompt('Enter second number to multiply');
  let result = 0;

  result = (inputOne * inputTwo);

  alert(result);
}
