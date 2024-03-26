// Get all Buttons
const buttons = document.querySelectorAll(
  ".number, .operator, #clearAll, #clear, #equals"
);

// Add
function add(numbers) {
  return numbers.reduce((acc, num) => acc + parseFloat(num), 0);
}

// Subtract
function subtract(numbers) {
  return numbers.reduce((acc, num) => acc - parseFloat(num));
}

// Multiply
function multiply(numbers) {
  return numbers.reduce((acc, num) => acc * parseFloat(num), 1);
}

//Divide
function divide(numbers) {
  return numbers.reduce((acc, num) => acc / parseFloat(num));
}

// Make sure everything is loaded
document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const resultDisplay = document.getElementById("resultDisplay");
  let previousExpression = "";

  // Add event listener to each button
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const value = button.textContent;

      // Equals Button Logic
      if (button.id === "equals") {
        previousExpression = display.value;

        // Split numbers to calculate with and get operator
        const numberStrings = display.value.split(/[+\-*/]/);
        const operator = display.value.match(/[+\-*\/]/);

        // Result Switch for Math
        let result;
        switch (operator[0]) {
          case "*":
            result = multiply(numberStrings);
            break;
          case "/":
            result = divide(numberStrings);
            break;
          case "+":
            result = add(numberStrings);
            break;
          case "-":
            result = subtract(numberStrings);
            break;
          default:
            console.error("Invalid operator");
            break;
        }

        // Display the result in the main display
        display.value = result;

        // Display the previous calculation in the result display
        resultDisplay.value = previousExpression;
        return;
      }

      // Clear all Button
      if (button.id === "clearAll") {
        display.value = "0";
        resultDisplay.value = "";
        previousExpression = "";
        return;
      }

      // Clear display if current value is "0" and clicked button is not "."
      if (display.value === "0" && value !== ".") {
        display.value = "";
      }

      // Handle backspace
      if (button.id === "clear") {
        display.value = display.value.slice(0, -1);
        if (display.value === "") {
          display.value = "0";
        }
        return;
      }

      // Handle decimal points
      if (value === ".") {
        const numberStrings = display.value.split(/[+\-*/]/);
        const lastNumberString = numberStrings[numberStrings.length - 1];
        if (lastNumberString.includes(".")) {
          return;
        }
        // Add "0" before decimal
        if (display.value === "" || display.value.slice(-1).match(/[+\-*/]/)) {
          display.value += "0";
        }
      } else if (value.match(/[+\-*/]/)) {
        // Replace Operators
        if (display.value.slice(-1).match(/[+\-*/]/)) {
          display.value = display.value.slice(0, -1) + value;
          return;
        }
      }
      // Display clicked values as concat
      display.value += value;
    });
  });
});
