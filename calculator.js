let result_console = document.querySelector("#result_console");
let last_result_console = document.querySelector("#last_result_console");
let firstValue = [];
let secondValue = [];
let valueCounter = false;
let mathCode = "";
let operationResult = [];

function showConsole(result) {
  if (!result) {
    if (!valueCounter) {
      result_console.innerHTML = "<h2>" + firstValue.join("") + "</h2>";
    } else {
      result_console.innerHTML =
        "<h2>" +
        firstValue.join("") +
        mathCode +
        secondValue.join("") +
        "</h2>";
    }
  } else {
    result_console.innerHTML = "<h2>" + result + "</h2>";
    firstValue = [];
    secondValue = [];
    firstValue.push(result);
  }
}
showConsole();

function takeNumber(num) {
  if (!valueCounter) {
    firstValue.push(num);
    showConsole();
  } else {
    secondValue.push(num);
    showConsole();
  }
  if (operationResult.length != 0) {
    last_result_console.innerHTML = `<p>` + operationResult + `</p>`;
  }
}
function removeLastNumber() {
  if (!valueCounter) {
    firstValue.pop();
    showConsole();
  } else {
    if (!secondValue.length == 0) {
      secondValue.pop();
      showConsole();
    } else {
      result_console.innerHTML = "<h2>" + firstValue.join("") + "</h2>";
      valueCounter = false;
    }
  }
  if (operationResult.length != 0) {
    last_result_console.innerHTML = `<p>` + operationResult + `</p>`;
    // String(firstValue[0]).slice(0, -1);
  }
}
function printResult() {
  joined1 = firstValue.join("");
  joined2 = secondValue.join("");
  realFirstValue = Number(joined1);
  realSecondValue = Number(joined2);
  switch (mathCode) {
    case "+":
      operationResult = realFirstValue + realSecondValue;
      break;
    case "-":
      operationResult = realFirstValue - realSecondValue;
      break;
    case "&times;":
      operationResult = realFirstValue * realSecondValue;
      break;
    case "/":
      operationResult = realFirstValue / realSecondValue;
      break;

    default:
      break;
  }
  valueCounter = true;
  showConsole(operationResult);
}
function clearAll() {
  mathCode = "";
  firstValue = [];
  secondValue = [];
  valueCounter = false;
  showConsole();
}

let joined1;
let joined2;
let realFirstValue;
let realSecondValue;

function math(key) {
  if (firstValue.length != 0) {
    valueCounter = true;
    switch (key) {
      case "+":
        mathCode = "+";
        break;
      case "-":
        mathCode = "-";
        break;

      case "*":
        mathCode = "&times;";
        break;

      case "/":
        mathCode = "/";

        break;

      default:
        break;
    }
    showConsole();
  }
  if (operationResult.length != 0) {
    last_result_console.innerHTML = `<p>` + operationResult + `</p>`;
  }
}
