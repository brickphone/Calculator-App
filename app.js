const numberKeys = document.querySelectorAll('.number-key');
const operatorKeys = document.querySelectorAll('.operator-key');
const result = document.querySelector('.result');

//TODO : 

let num1 = "";
let num2 = "";
let operator = '';
let isFirstNum = true;

function startingPoint() {
  let num1 = "";
  let num2 = "";
}

function numDisplay() {
  numberKeys.forEach(key => {
    key.addEventListener("click", () => {
      if (isFirstNum) {
        num1 += key.innerHTML;
        result.innerHTML = num1;
      } else {
        num2 += key.innerHTML;
        result.innerHTML = num2;
      }
    });
  });
}

function setOperator() {
  operatorKeys.forEach(key => {
    key.addEventListener("click", () => {
      operator = key.innerHTML;
      isFirstNum = false;
    })
  });
}

function operatorDisplay() {
  operatorKeys.forEach(key => {
    key.addEventListener("click", () => {
      result.innerHTML = operator;
    });
  });
}

function clearDisplay() {
  operatorKeys.forEach(key => {
    key.addEventListener("click", () => {

    });
  });
}

numDisplay();
setOperator();
operatorDisplay();

function operate() {

}