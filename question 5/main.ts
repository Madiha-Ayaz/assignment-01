// 3.Calculator project using function:
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the
// corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments.

let num1 = 10;
let num2 = 5;

let operator1 = '+';
let operator2='-';

function Calculation(num1:number, num2:number, operator:any) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else {
        return "Invalid operator";
    }
}

let result = Calculation(num1, num2, operator1);
console.log(`The result of ${num1} ${operator1} ${num2} is: ${result}`);
let result2 = Calculation(num1, num2, operator2);
console.log(`The result of ${num1} ${operator2} ${num2} is: ${result2}`);
