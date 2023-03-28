const numberKeys = document.querySelectorAll('.number-key');
const operatorKeys = document.querySelectorAll('.operator-key');
const equalsKey = document.querySelector('#equals');
const result = document.querySelector('.result');

let num1 = "";
let num2 = "";
let operator = "";
let isFirstNum = true;

function startingPoint() {
  result.innerHTML = "0";
  num1 = "";
  num2 = "";
  operator = "";
  isFirstNum = true;
}

function numDisplay() {
  numberKeys.forEach((key) => {
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

equalsKey.addEventListener('click', () => {
  operate(num1, num2, operator);
});

function setOperator() {
  operatorKeys.forEach((key) => {
    key.addEventListener('click', () => {
      if (key.innerHTML === '=') {
        return;
      }

      operator = key.innerHTML;
      isFirstNum = false;
      operatorDisplay();
    });
  });
}

function operatorDisplay() {
  result.innerHTML = operator;
}

function clearDisplay() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.addEventListener("click", () => {
    startingPoint();
  });
}

function operate() {
  console.log(operator)
  let total = 0;

  switch (operator) {
    case '+':
      total = parseFloat(num1) + parseFloat(num2);
      break;
    case '-':
      total = parseFloat(num1) - parseFloat(num2);
      break;
    case '*':
      total = parseFloat(num1) * parseFloat(num2);
      break;
    case '/':
      total = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      console.log('Invalid operator');
      break;
  }

  result.innerHTML = total;
  num1 = total;
  num2 = "";
  operator = "";
  isFirstNum = true;
}

numDisplay();
setOperator();
clearDisplay();


