#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Display colourful Welcome message 
console.log(chalk.bold.bgBlue("\n \t\t Code With Hamza - Word Counter"));
console.log("=".repeat(60));
// Propmt the user to enter a sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence: "
    }
]);
// Trimming the sentence and splitting it into words based on "spaec"
let words = answer.sentence.trim().split(" ");
// Analysis pf user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Senteence word: "));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.red(words.length)}`));
console.log("=".repeat(60));
