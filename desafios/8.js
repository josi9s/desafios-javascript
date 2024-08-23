let num1 = 4;
let num2 = 2;
let operation = "%";
let result;

switch (operation) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  case "**":
    result = num1 ** num2;
    break;
  case "%":
    result = num1 % num2;
    break;
  default:
    result = "Invalid";
    break;
}

console.log("Result: ", result);
