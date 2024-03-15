const buttons = document.querySelectorAll(".number, .operator");

// Make sure everything is loaded up first
document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");

  // Add event listener to each button
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const value = button.textContent;

      // Clear the display if the current value is "0" and the clicked button is not "."
      if (display.value === "0" && value !== ".") {
        display.value = "";
      }

      // If the display value is "0" and "." is clicked, add "0" before the "."
      if (display.value === "" && value === ".") {
        display.value = "0" + value;
      } else {
        display.value += value;
      }

      // Check if the clicked value is an operator and the last character in the display value is also an operator
      if (
        value.match(/[+\-*/]/) &&
        display.value.slice(-2, -1).match(/[+\-*/]/)
      ) {
        display.value = display.value.slice(0, -2) + value;
      }
    });
  });
});

// let num1 = 3;
// let operator = "+";
// let num2 = 5;

// Operate Function
// function operate(operator, num1, num2) {
//   add();
// }

// add

// subtract

// multiply

// divide
