let currentInput = "";
let resultDisplayed = false; 


const buttons = document.querySelectorAll(".btn");
const display = document.getElementById("display");


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "clear") {
      currentInput = ""; 
      display.innerText = "0";
      resultDisplayed = false;
    } else if (value === "backspace") {
      currentInput = currentInput.slice(0, -1); 
      display.innerText = currentInput || "0";
    } else if (value === "=") {
      try {
        
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
        resultDisplayed = true;
      } catch (error) {
        display.innerText = "Error";
        currentInput = "";
      }
    } else {
      
      if (resultDisplayed) {
        currentInput = ""; 
        resultDisplayed = false;
      }
      currentInput += value;
      display.innerText = currentInput;
    }
  });
});
