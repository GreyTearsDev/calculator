let firstNumber, operator, secondNumber;
let displayValue = [];
let operatorsToUse = []; 


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
  if (operator == '*') {
    multiply(firstNumber, secondNumber)
  } else if ( operator == '/') {
    divide(firstNumber, secondNumber);
  } else if (operator == '+') {
    add(firstNumber, secondNumber);
  } else if (operator == '-') {
    subtract(firstNumber, secondNumber);
  }
}

let digitButtons = Array.from(document.querySelectorAll(".digit")); // gets all of the digit elements
// add listener for displaying the digits on the screen
digitButtons.forEach((e) =>
  e.addEventListener("click", (event) => displayDigitOnScreen(event))
);
// add listener for storing the digits
digitButtons.forEach((e) =>
  e.addEventListener("click", (event) => processInput(event))
);

// Stores the value of the button that was clicked

function processInput(event) {
  //displayValue.push(event.target.textContent);
  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let operators = ['+', '-', '*', '/'];
  let input = event.target.textContent;

  if (digits.includes(input)) {
    displayValue.push(input); 
    console.log();
  } else if (operators.includes(input)) {
    // if the user enters an operator
    if (firstNumber == null) {
      operators.push(input); // store the operator
      firstNumber = displayValue.join(''); // concatenate the strung numbers into a single string
      displayValue.length = 0; // delete elements in the array
    } else if (secondNumber == null) {
      operators.push(input);
      secondNumber = displayValue.join('');
      displayValue.length = 0; // delete elements in the array
    }
  }
  
  console.log(displayValue);
  console.log(displayValue.length);
  console.log(firstNumber);
  console.log(secondNumber);
}



// Displays the value of the clicked buttons on the screen
function displayDigitOnScreen(event) {
  let display = document.querySelector(".display"); // gets the dom element
  let displayValueOnScreen = event.target.textContent; // gets the content of the clicked buttons
  display.textContent += displayValueOnScreen; // adds the value of the clicked button to the screen
}



//for every character in the display, if it is an operator,



// add the numbers in an array as a long string



// every time an operator is clicked, a blank space is added 
// between the numbers.
// every time an operator is clicked on, it is added to its 
// own array of operators
// split the string of numbers into individual array elements 
// separated by the empty space


//store the numbers 


