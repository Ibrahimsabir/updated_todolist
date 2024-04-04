#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let friendName = [];
let condition = true;
while (condition) {
    let addName = await inquirer.prompt([
        {
            name: "AddName",
            type: "input",
            message: "Do add your friend name"
        },
        {
            name: "AddMore",
            type: "confirm",
            message: "Do you have any other friend to add?",
            default: false
        }
    ]);
    friendName.push(addName.AddName);
    console.log(chalk.bgYellow(friendName));
    condition = addName.AddMore;
}
friendName.map((names) => console.log(chalk.bgGreen(`\n\t ${names} , you are invited for dinner tonight \t\n`)));
