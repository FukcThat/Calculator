const buttons = document.querySelectorAll(
  ".number, .operator, #clearAll, #clear, #equals"
);

document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");

  // Add event listener to each button
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const value = button.textContent;

      // Equals Button Logic
      if (button.id === "equals") {
        // get the numbers on either side
        const numberStrings = display.value.split(/[+\-*/]/);
        const operator = display.value.match(/[+\-*\/]/);
        resultDisplay.value = display.value + " =";

        // math with switch
        switch (operator[0]) {
          case "*":
            display.value = multiply(numberStrings);
            break;
          case "/":
            result = divide(numberStrings);
            break;
          case "+":
            result = add(numberStrings);
            break;
          case "-":
            result = subract(numberStrings);
            break;
          default:
            console.error("YOU SUCK");
            break;
        }

        return;
      }

      // Clear all Button
      if (button.id === "clearAll") {
        display.value = "0";
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
