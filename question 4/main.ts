// 4.Functions:
// • Set up two different variables with different values.
// • Call a function with these variables as arguments and output the result using console.log.
// • Create a second call to the function with two more numbers as arguments.


let a= 9
let b=8
function multiply(num1:number,num2:number){
    return num1 * num2;
}
let answer1 = multiply(a, b);
console.log( "The multiple of", a, "and", b, "is:",answer1)
let c= 9
let d=8
function add(num1:number,num2:number){
    return num1 + num2;
}
let answer2 = add(c,d);
console.log( "The sum of", c, "and", d, "is:",answer2)
