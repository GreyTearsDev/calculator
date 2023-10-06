//==============GLOBAL VARIABLES==================//
let digits = Array.from(document.querySelectorAll(".digit"));
let displayScreen = document.querySelector(".display");
let displayValues = [];

//==============EVENT LISTENERS================//

digits.forEach((x) =>
  x.addEventListener("click", (event) => {
    displayOnScreen(event);
    saveNumber(event);
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
    displayScreen.textContent += multiply(firstNumber, secondNumber);
  } else if (operator == "/") {
    divide(firstNumber, secondNumber);
  } else if (operator == "+") {
    add(firstNumber, secondNumber);
  } else if (operator == "-") {
    subtract(firstNumber, secondNumber);
  }
}

function displayOnScreen(event) {
  let input = event.target.textContent;
  displayScreen.textContent += input;
}

function saveNumber(event) {
  let input = event.target.textContent;
  let regexDigitPattern = /[0-9]/.test(input);
  let regexOperatorPattern = /[+\-/*]/.test(input);
  let regexEqualPattern = /[=]/.test(input);
  let firstNumber;
  let secondNumber;
  let operator;


  if (regexDigitPattern) {
    displayValues.push(input);
  } else if (regexOperatorPattern) {
    // Handle operators here, set operator variable
    operator = input;
    firstNumber = parseFloat(displayValues.join(""));
    displayValues = []; // Clear displayValues for the next number
  } else if (regexEqualPattern) {
    secondNumber = parseFloat(displayValues.join(""));
    operate(operator, firstNumber, secondNumber);
    displayValues = []; // Clear displayValues after calculation
  }
}
