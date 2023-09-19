let firstNumber, operator, secondNumber;

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      add(firstNumber, secondNumber);
      break;
    case "-":
      subtract(firstNumber, secondNumber);
      break;
    case "*":
      multiply(firstNumber, secondNumber);
      break;
    case "/":
      divide(firstNumber, secondNumber);
      break;
  }
}

let digitButtons = Array.from(document.querySelectorAll(".digit"));
digitButtons.forEach((e) => e.addEventListener("click", (event) => displayDigitOnScreen(event)))
// add event listener to the buttons



function displayDigitOnScreen(event) {
	let display = document.querySelector(".display");
	let displayValue = event.target.textContent;
  display.textContent += displayValue;
}
