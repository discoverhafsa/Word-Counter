import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Entre sentence to count the word:"
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(`your sentence word count is ${words.length}`);
