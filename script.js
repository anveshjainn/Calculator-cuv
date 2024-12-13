const display = document.getElementById("calc-display");
const buttons = document.querySelectorAll(".btn");

let currentInput = ""; 

function updateDisplay(value) {
  display.value = value || "0";
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnValue = button.textContent;

    if (btnValue === "DEL") {
      currentInput = currentInput.slice(0, -1);
    } else if (btnValue === "RESET") {
      currentInput = "";
    } else if (btnValue === "=") {
      try {
        const result = eval(currentInput.replace(/x/g, "*")); 
        currentInput = result.toString();
      } catch (error) {
        currentInput = "Error";
      }
    } else {
      currentInput += btnValue;
    }

    updateDisplay(currentInput);
  });
});

updateDisplay(currentInput);
