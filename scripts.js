const buttons = document.querySelectorAll(
  ".number, .operator, #clearAll, #clear"
);

document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");

  // Add event listener to each button
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const value = button.textContent;

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
        // Split the display value into number strings
        const numberStrings = display.value.split(/[+\-*/]/);
        const lastNumberString = numberStrings[numberStrings.length - 1];
        // Ignore multiple decimals within number string
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

// add

// subtract

// multiply

// divide
