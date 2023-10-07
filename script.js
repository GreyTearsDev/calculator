//==============GLOBAL VARIABLES==================//
let digits = Array.from(document.querySelectorAll(".digit"));
let keyboard = document.body;
let displayScreen = document.querySelector(".display");
let storedValues = [];
let firstNumber;
let secondNumber;
let operator = "";
let result;

//==============EVENT LISTENERS================//

digits.forEach((x) =>
  x.addEventListener("click", (event) => {
    let input = event.target.textContent;
    displayOnScreen(input);
    saveNumber(input);
  })
);

keyboard.addEventListener("keydown", (event) => {
  let input = event.key.toUpperCase();

  console.log(input);
  displayOnScreen(input);
  saveNumber(input);
});

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

function displayOnScreen(input) {
  let isDigit = /[\d.]/.test(input);
  let isOperator = /[+\-//x]/.test(input);
  let equalButtonClicked = /[=/ENTER]/.test(input);
  let displayIsFull = storedValues.length >= 18;
  let decimalIsPresent = displayScreen.textContent.includes(".");

  if (isDigit || isOperator || equalButtonClicked) {
    if (input == "D" || input == "BACKSPACE") {
      displayScreen.textContent = displayScreen.textContent.slice(0, -1); // Delete the last element on the screen
    } else if (!displayIsFull) {
      if (decimalIsPresent) {
        switch (
          input == "." // Check if the new input is a decimal point
        ) {
          case true:
            break;
          case false:
            displayScreen.textContent += input;
        }
      } else {
        displayScreen.textContent += input;
      }
    }
  }
}

function saveNumber(input) {
  let ongoingCalculationExists = operator === "";
  let storedNumber = parseFloat(storedValues.join(""));

  let isDigit = /[\d.]/.test(input);
  let isOperator = /[+\-//x]/.test(input);
  let equalButtonClicked = /[=/ENTER]/.test(input);
  let clearButtonClicked = /[C]/.test(input);
  let deleteButtonClicked = /[D/BACKSPACE]/.test(input);
  let isDecimal = /[.]/.test(input);

  if (isDigit) {
    if (isDecimal) {
      switch (storedValues.includes(".")) {
        case false:
          storedValues.push(input);
          break;
        case true:
          break;
      }
    } else if (storedValues.length < 18) {
      storedValues.push(input);
    }
  } else if (isOperator) {
    // Check if there is already an ongoing calculation
    if (ongoingCalculationExists) {
      // Handle operators here, set operator variable
      operator = input;
      firstNumber = storedNumber;
      storedValues = []; // Clear storedValues for the next number
    } else {
      //
      secondNumber = storedNumber;
      result = operate(operator, firstNumber, secondNumber);
      firstNumber = result;
      storedValues = []; // Clear storedValues after calculation
      secondNumber = "";
      operator = input;
    }
  } else if (equalButtonClicked) {
    secondNumber = storedNumber;
    result = operate(operator, firstNumber, secondNumber);
    storedValues = []; // Clear storedValues after calculation
    storedValues.push(result); //Save the current result for later calculations
    displayScreen.textContent = result;
    firstNumber = result;
    operator = "";
    secondNumber = "";
  } else if (clearButtonClicked) {
    // Clear the variables for new operations
    displayScreen.textContent = "";
    storedValues = [];
    firstNumber = "";
    secondNumber = "";
  } else if (deleteButtonClicked) {
    storedValues.pop(storedValues.length - 1);
  }
}

//bug - multiple real numbers not showing on display (despite computing)
