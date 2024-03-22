import inquirer from "inquirer";
// computer will generate a random no
// user input for guessing no
// compare both numbers
let randomNumber = Math.floor(Math.random() * 10);
// console.log(randomNumber);
const answers = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number from 1 till 10"
    }]);
// console.log(answers)
if (answers.userGuessedNumber === randomNumber) {
    console.log('Congragulations! You Won');
}
else {
    console.log("You lose ,you guessed a wrong no.Let's take another turn");
}
