//==============GLOBAL VARIABLES==================//
let firstNumber;
let operator;
let secondNumber;
let digits = Array.from(document.querySelectorAll(".digit"));
let displayValue = [];
let inputNumbers = [];

//==============EVENT LISTENERS================//

digits.forEach((x) =>
  x.addEventListener("click", (event) => {
    let input = event.target.textContent;
    displayValue.push(input);
  })
);

//====================FUNCTIONS==================//

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
  //
  if (operator == "*") {
    multiply(firstNumber, secondNumber);
  } else if (operator == "/") {
    divide(firstNumber, secondNumber);
  } else if (operator == "+") {
    add(firstNumber, secondNumber);
  } else if (operator == "-") {
    subtract(firstNumber, secondNumber);
  }
}
