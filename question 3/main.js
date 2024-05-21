// 3.Friend checker game:
// • Prompt the user to enter a name.
// • Use a switch statement to check if the entered name is a known friend.
// • Output a confirmation message if the name is known, otherwise output a default
// response.
import inquirer from "inquirer";
let user = await inquirer.prompt([{
        name: "knownName",
        type: "input",
        message: "Enter a  friend name",
    }]);
let name = user.knownName;
switch (name) {
    case "Madiha":
        console.log("Madiha is a known friend.");
        break;
    case "Alisha":
        console.log("Alisha is a known friend.");
        break;
    case "Freeha":
        console.log("Freeha is a known friend.");
        break;
    case "Asma":
        console.log("Asma is a known friend.");
        break;
    case "Almas":
        console.log("Almas is a known friend.");
        break;
    case "Aniqa":
        console.log("Aniqa is a known friend.");
        break;
    case "Hafsa":
        console.log("Hafsa is a known friend.");
        break;
    default:
        console.log("your are unknown friend 'sorry'");
}
