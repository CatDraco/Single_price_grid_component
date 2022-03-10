var operator, val1, val2;
val1 = parseInt(prompt("Enter first number"));
operator = prompt("Enter the operator");
val2 = parseInt(prompt("Enter second number"));

switch (operator) {
    case "-":
        result = val1 - val2;
        break;
    case "+":
        result = val1 + val2;
        break;
    case "/":
        result = val1 / val2;
        break;
    case "*":
        result = val1 * val2;
        break;
    default:
        result = "Something went wrong";
        break;
}

console.log(result);
