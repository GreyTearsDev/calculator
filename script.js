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

let digitButtons = Array.from(document.querySelectorAll(".digit")); // gets all of the digit elements
// add listener for displaying the digits on the screen
digitButtons.forEach((e) =>
  e.addEventListener("click", (event) => displayDigitOnScreen(event))
);
// add listener for storing the digits
digitButtons.forEach((e) =>
  e.addEventListener("click", (event) => storeDigits(event))
);

// Stores the value of the button that was clicked
let displayValue = [];
function storeDigits(event) {
  displayValue.push(event.target.textContent);
}

// Displays the value of the clicked buttons on the screen
function displayDigitOnScreen(event) {
  let display = document.querySelector(".display"); // gets the dom element
  let displayValueOnScreen = event.target.textContent; // gets the content of the clicked buttons
  display.textContent += displayValueOnScreen; // adds the value of the clicked button to the screen
}

console.log(displayValue);

//for every character in the display, if it is an operator,
