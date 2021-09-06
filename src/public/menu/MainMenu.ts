import inquirer from "inquirer";
import chalk from "chalk";
import {LanguageMenuQ} from "./Question";

export const fnMainMenu = (command: string) => {
    console.log(chalk.bgBlack.blueBright.bold(`Welcome to (Fhalcom-toec):`));
    console.log(chalk.bgBlack.blueBright.bold(`Fhalcom TypeOrm Oracle Entity Generator`));


    const questions = [
        LanguageMenuQ,

    ]

    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
    });

}