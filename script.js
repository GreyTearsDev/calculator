//==============GLOBAL VARIABLES==================//
let digits = Array.from(document.querySelectorAll(".digit"));
let displayScreen = document.querySelector(".display");
let displayValues = [];
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
  return firstNumber / secondNumber;
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
  displayScreen.textContent += input;
}

function saveNumber(event) {
  let input = event.target.textContent;
  let regexDigitPattern = /[0-9]/.test(input);
  let regexOperatorPattern = /[+\-/x]/.test(input);
  let regexEqualPattern = /[=]/.test(input);
  let regexDeletePattern = /[DEL]/.test(input);
  console.log(input)
  // if user deletes, before the number gets assign to the variables, pop the last number out
  if (regexDeletePattern) {
    console.log(displayScreen[displayScreen.length - 1].textContent)

  }else if (regexDigitPattern) {
    displayValues.push(input);
  } else if (regexOperatorPattern) {
    // Handle operators here, set operator variable
    operator = input;
    firstNumber = parseFloat(displayValues.join(""));
    displayValues = []; // Clear displayValues for the next number
  } else if (regexEqualPattern) {
    secondNumber = parseFloat(displayValues.join(""));
    result = operate(operator, firstNumber, secondNumber);
    displayValues = []; // Clear displayValues after calculation
    displayValues.push(result); //Save the current result for later calculations
    displayScreen.textContent = result;
    firstNumber = result;
  } else if (input === "C") {
    // Clear the variables for new operations
    displayScreen.textContent = "";
    displayValues = [];
    firstNumber = "";
    secondNumber = "";
  }
}

// add delete button
// allow for floating point numbers
