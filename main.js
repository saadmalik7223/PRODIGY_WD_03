const display = document.querySelector(".display");
let expression = "";

const joinExpression = (el) => {
  expression = expression.concat(el);
  display.innerHTML = expression;
};

const showError = () => {
  alert("you just type invalid expression ");
  expression = "";
  document.getElementById("user-input").value = null;
  display.innerHTML = "ERROR";
};

const displayResult = (x) => {
  if (x) {
    // x true mean enter button enevt otherwise "=" button....
    try {
      expression = eval(document.getElementById("user-input").value);
    } catch (err) {
      showError();
      return;
    }
  } else {
    try {
      expression = eval(expression);
    } catch (err) {
      showError();
      return;
    }
  }
  display.innerHTML = expression;
  expression = "";
  document.getElementById("user-input").value = null;
};
