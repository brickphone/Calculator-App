const numberKeys = document.querySelectorAll('.number-key');
const operatorKeys = document.querySelectorAll('.operator-key');
const result = document.querySelector('.result');

//TODO : fix game logic

let num1 = "";
let num2 = "";
let operator = '';
let isFirstNum = true;

function startingPoint() {
  result.innerHTML = '0';
  num1 = '';
  num2 = '';
  operator = '';
  isFirstNum = true;
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
  const clearBtn = document.querySelector('#clear')
  clearBtn.addEventListener("click", () => {
    startingPoint();
  })
}

numDisplay();
setOperator();
operatorDisplay();
clearDisplay();

<<<<<<< HEAD
function operate(num1, num2, operator) {
  let totalSum = 0;
  
  if (operator === '+') {
    totalSum = (num1) + (num2);
  } else if (operator === '-') {
    totalSum = (num1) - (num2);
  } else if (operator === '*') {
    totalSum = (num1) * (num2);
  } else if (operator === '/') {
    totalSum = (num1) / (num2);
  };
  if (operator === '=') {
    result.innerHTML = totalSum;
  }
 
}
=======
let total = 0;

function operate() {

}
>>>>>>> fa35c41d57c9f96e469b92094bf4ef1e0ec51568
