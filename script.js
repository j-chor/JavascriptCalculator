let add = (num1, num2) => num1 + num2;
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


let clear = () => {
  num1 = 0;
  num2 = 0;
  display.textContent = "";
 };

let display = document.querySelector("#display");
display.textContent = "999";

let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let button4 = document.querySelector("#button4");
let button5 = document.querySelector("#button5");
let button6 = document.querySelector("#button6");
let button7 = document.querySelector("#button7");
let button8 = document.querySelector("#button8");
let button9 = document.querySelector("#button9");
let buttonPlus = document.querySelector("#buttonPlus");
let buttonMinus = document.querySelector("#buttonMinus");
let buttonMultiply = document.querySelector("#buttonMultiply");
let buttonDivide = document.querySelector("#buttonDivide");
let buttonC = document.querySelector("#buttonC");
let buttonEquals = document.querySelector("#buttonEquals");

button1.addEventListener("click", () => { display.textContent += "1"; });
button2.addEventListener("click", () => { display.textContent += "2"; });
button3.addEventListener("click", () => { display.textContent += "3"; });
button4.addEventListener("click", () => { display.textContent += "4"; });
button5.addEventListener("click", () => { display.textContent += "5"; });
button6.addEventListener("click", () => { display.textContent += "6"; });
button7.addEventListener("click", () => { display.textContent += "7"; });
button8.addEventListener("click", () => { display.textContent += "8"; });
button9.addEventListener("click", () => { display.textContent += "9"; });

buttonC.addEventListener("click", () => { clear(); });

let num1;
let num2;
let operator;
buttonPlus.addEventListener("click", () => {
  num1 = display.textContent;
  operator = "+";
  display.textContent = "";
});
buttonMinus.addEventListener("click", () => {
  num1 = display.textContent;
  operator = "-";
  display.textContent = "";
});
buttonMultiply.addEventListener("click", () => {
  num1 = display.textContent;
  operator = "*";
  display.textContent = "";
});
buttonDivide.addEventListener("click", () => {
  num1 = display.textContent;
  operator = "/";
  display.textContent = "";
});
buttonEquals.addEventListener("click", () => {
  num2 = display.textContent;
  display.textContent = operate(num1, num2, operator);
})