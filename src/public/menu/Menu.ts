import inquirer, {Answers} from "inquirer";
import ColorText from "./../Util/ColorText"
import {FileExistQ, fnGetQuestions, LanguageMenuQ} from "./Question";
import {basePathGlobal, commands, fnGetFhalcomTemplate, questionsKeywords} from "../Util/Vars";
import {fnCreateFile, fnGetBasePath} from "../files/Files";
import path from "path";
import fs from "fs";

const colorText = new ColorText();

export const fnMainMenu = (command: string) => {
    console.log(colorText.bSuccess(`Welcome to (Fhalcom-toec):`));
    console.log(colorText.bSuccess(`Fhalcom TypeOrm Oracle Entity Generator`));
    let questions = fnGetQuestions(command);
    inquirer.prompt(questions).then((answers) => {
        fnProcessMenu(command,answers);
    });

}


const fnProcessInitMenu = (answers: any) => {
    const isExist = Object.keys(answers).findIndex(answer => answer === `${questionsKeywords.file_exists}`) >= 0;
    if(!isExist || (isExist && answers.file_exists))
    {
        console.log(basePathGlobal);
        const fileCreated = fnCreateFile("", "fhalcom.config","json",fnGetFhalcomTemplate());
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