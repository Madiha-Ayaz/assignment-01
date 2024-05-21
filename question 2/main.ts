// 2.Evaluating a number game:
// • Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the entered number is greater than, equal to, or less
// than the dynamic number value.
import inquirer from "inquirer";
 
const userInterNumber = await inquirer.prompt([
  { message: "Enter a number", type:"number", name: "userNumber" },
])
const userNumber=userInterNumber.userNumber

  let dynamicNumber=50;
   if (userNumber > dynamicNumber) {
    console.log(`The entered number ${userNumber} is greater than ${dynamicNumber}.`)
   }
   
    else if (userNumber < dynamicNumber) {
        console.log(`The entered number ${userNumber} is Less than ${dynamicNumber}.`)}
        else { 
          console.log(`The entered number ${userNumber} is equal to ${dynamicNumber}.`);}

    
    