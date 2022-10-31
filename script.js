let add = (num1, num2) => Number(num1) + Number(num2);
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

let operate = (num1, num2, operator) => {
  switch (operator) {
    case "+": return add(num1, num2);
    case "-": return subtract(num1, num2);
    case "*": return multiply(num1, num2);
    case "/": return divide(num1, num2);
    default: {
      console.log("Wrong operator");
    }
  }
}

let calculate = () => {
  dotFlag = false;
  if (num1 !== undefined) {
    num2 = display.textContent;
    if (num2 === "0" && operator === "/") {
      clear();
      display.textContent = "ERROR";
      return;
    }
    display.textContent = round(operate(num1, num2, operator));
    num1 = display.textContent;
    clearFlag = true;
  }
  else {
    num1 = display.textContent;
    clearFlag = true;
  }
}

let round = (number) => {
  return Math.round(number * 1000000) / 1000000;
}

let clear = () => {
  num1 = undefined;
  num2 = undefined;
};

let flagCheck = () => {
  if (clearFlag === true) {
    display.textContent = "";
    clearFlag = false;
  }
}

let display = document.querySelector("#display");
display.textContent = "0";

let button0 = document.querySelector("#button0");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let button4 = document.querySelector("#button4");
let button5 = document.querySelector("#button5");
let button6 = document.querySelector("#button6");
let button7 = document.querySelector("#button7");
let button8 = document.querySelector("#button8");
let button9 = document.querySelector("#button9");
let buttonDot = document.querySelector("#buttonDot");
let buttonPlus = document.querySelector("#buttonPlus");
let buttonMinus = document.querySelector("#buttonMinus");
let buttonMultiply = document.querySelector("#buttonMultiply");
let buttonDivide = document.querySelector("#buttonDivide");
let buttonC = document.querySelector("#buttonC");
let buttonEquals = document.querySelector("#buttonEquals");
let buttonBackspace = document.querySelector("#buttonBackspace");

button0.addEventListener("click", () => {
  flagCheck();
  display.textContent += "0";
});
button1.addEventListener("click", () => {
  flagCheck();
  display.textContent += "1";
});
button2.addEventListener("click", () => {
  flagCheck();
  display.textContent += "2";
});
button3.addEventListener("click", () => {
  flagCheck();
  display.textContent += "3";
});
button4.addEventListener("click", () => {
  flagCheck();
  display.textContent += "4";
});
button5.addEventListener("click", () => {
  flagCheck();
  display.textContent += "5";
});
button6.addEventListener("click", () => {
  flagCheck();
  display.textContent += "6";
});
button7.addEventListener("click", () => {
  flagCheck();
  display.textContent += "7";
});
button8.addEventListener("click", () => {
  flagCheck();
  display.textContent += "8";
});
button9.addEventListener("click", () => {
  flagCheck();
  display.textContent += "9";
});
buttonDot.addEventListener("click", () => {
  if (dotFlag === true) return;
  flagCheck();
  display.textContent += ".";
  dotFlag = true;
});

buttonC.addEventListener("click", () => {
  dotFlag = false;
  clear();
  display.textContent = ""
});
buttonBackspace.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1);
})

let num1 = undefined;
let num2 = undefined;
let clearFlag = true;
let dotFlag;
let operator;
buttonPlus.addEventListener("click", () => {
  calculate();
  operator = "+";
});
buttonMinus.addEventListener("click", () => {
  calculate();
  operator = "-";
});
buttonMultiply.addEventListener("click", () => {
  calculate();
  operator = "*";
});
buttonDivide.addEventListener("click", () => {
  calculate();
  operator = "/";
});
buttonEquals.addEventListener("click", () => {
  calculate();
  clear();
})