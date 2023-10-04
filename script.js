//==============GLOBAL VARIABLES==================//
let firstNumber;
let operator;
let secondNumber;
let digits = Array.from(document.querySelectorAll(".digit"));
let functions = Array.from(document.querySelectorAll(".fucntion"));
let displayScreen = document.querySelector(".display");
let displayValue = [];
let inputNumbers = [];

//==============EVENT LISTENERS================//

digits.forEach((x) =>
  x.addEventListener("click", (event) => {
    let input = event.target.textContent;
    displayValue.push(input);
  })
);

digits.forEach((x) =>
  x.addEventListener("click", (event) => displayNumbers(event))
);

functions.forEach((x) =>
  x.addEventListener("click", (event) => displayFunctions(event))
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

function displayNumbers(event) {
  let input = event.target.textContent;
  displayScreen.textContent += input;
}

function displayFunctions(event) {
  let input = event.target.textContent;
  displayScreen.textContent += input;
}

