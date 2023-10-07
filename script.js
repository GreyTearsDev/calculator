//==============GLOBAL VARIABLES==================//
let digits = Array.from(document.querySelectorAll(".digit"));
let displayScreen = document.querySelector(".display");
let storedValues = [];
let firstNumber;
let secondNumber;
let operator = "";
let result;

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
  if (secondNumber == 0) {
    return "Undefined!";
  } else {
    return firstNumber / secondNumber;
  }
}

function operate(operator, firstNumber, secondNumber) {
  if (operator === "x") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    return divide(firstNumber, secondNumber);
  } else if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  }
  return 0;
}

function displayOnScreen(event) {
  let input = event.target.textContent;

  if (input !== "D") {
    displayScreen.textContent += input;
  }
}

function saveNumber(event) {
  let input = event.target.textContent;
  let ongoingCalculationExists = (operator === "");
  let storedNumber = parseFloat(storedValues.join(""));
  let isDigit = /[\d.]/.test(input);
  let isOperator = /[+\-//x]/.test(input);
  let equalButtonClicked = /[=]/.test(input);
  let clearButtonClicked = /[C]/.test(input);
  let deletePattern = /[D]/.test(input);

  if (isDigit) {
    storedValues.push(input);
  } else if (isOperator) {
    // Check if there is already an ongoing calculation
    if (ongoingCalculationExists) { 
       // Handle operators here, set operator variable
       operator = input;
       firstNumber = storedNumber
       storedValues = []; // Clear storedValues for the next number
    } else { // 
      secondNumber = storedNumber
      result = operate(operator, firstNumber, secondNumber);
      firstNumber = result;
      storedValues = []; // Clear storedValues after calculation
      secondNumber = "";
      operator = input;
    } 
  } else if (equalButtonClicked) {
    secondNumber = storedNumber
    result = operate(operator, firstNumber, secondNumber);
    storedValues = []; // Clear storedValues after calculation
    storedValues.push(result); //Save the current result for later calculations
    displayScreen.textContent = result;
    firstNumber = result;
    operator = '';
    secondNumber = "";
  } else if (clearButtonClicked) {
    // Clear the variables for new operations
    displayScreen.textContent = "";
    storedValues = [];
    firstNumber = "";
    secondNumber = "";
  }
}
