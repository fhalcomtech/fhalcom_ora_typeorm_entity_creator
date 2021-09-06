import inquirer, {Answers} from "inquirer";
import ColorText from "./../Util/ColorText"
import {FileExistQ, fnGetQuestions, LanguageMenuQ} from "./Question";
import {commands} from "../Util/Vars";
import {fnCreateFile} from "../files/Files";

const colorText = new ColorText();

export const fnMainMenu = (command: string) => {
    console.log(colorText.bSuccess(`Welcome to (Fhalcom-toec):`));
    console.log(colorText.bSuccess(`Fhalcom TypeOrm Oracle Entity Generator`));
    let questions = fnGetQuestions(command);
    inquirer.prompt(questions).then((answers) => {
        fnProcessMenu(command,answers)
    });

}


const fnProcessInitMenu = (answers: any) => {
    if(answers.file_exists && answers.file_exists === true)
    {
        const fileCreated = fnCreateFile("", "fhalcom.config","js");
        if(fileCreated.isSaved){
            colorText.bSuccess(fileCreated.path);
        }

    }
}

export const fnProcessMenu = (command: string, answers:any) => {

    switch (command) {
        case commands.i:
        {
            fnProcessInitMenu(answers)
        }
    }

}