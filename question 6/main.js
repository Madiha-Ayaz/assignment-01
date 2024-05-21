"use strict";
// 4.Anonymous functions:
// • Assign a function expression to a variable, with one parameter that outputs the provided
// argument to the console.
// • Pass an argument into the function.
// • Create the same function as a normal function declaration.
//---------------------Anonymous functions-------------------
let Argument1 = function (argument) {
    console.log(argument);
};
Argument1("my name is Madiha");
//------------------------simple function-----------------------------------
function Argument2(argument) {
    console.log(argument);
    return Argument1;
}
;
Argument2("my name is Madiha");
