const display = document.getElementById("display");
const buttons = document.querySelectorAll(".number, .operator");

// Make sure everything is loaded up first, add EventListener to each button, get the value, handle "." and 0, stich it together
document.addEventListener("DOMContentLoaded", function () {
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var value = button.textContent;

      if (display.value === "0" && value !== ".") {
        display.value = "";
      }

      if (display.value === "" && value === ".") {
        display.value = "0" + value;
      } else {
        display.value += value;
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
