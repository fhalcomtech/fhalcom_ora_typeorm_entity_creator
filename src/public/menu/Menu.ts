import inquirer, {Answers} from "inquirer";
import ColorText from "./../Util/ColorText"
import {FileExistQ, fnGetQuestions, LanguageMenuQ} from "./Question";
import {basePathGlobal, commands, fnGetFhalcomTemplate, questionsKeywords} from "../Util/Vars";
import {fnCreateFile, fnGetBasePath} from "../files/Files";


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
        const fileCreated = fnCreateFile("", "fhalcom.config","json",fnGetFhalcomTemplate());
        if(fileCreated.isSaved){
            colorText.bSuccess(fileCreated.path);
        }
    }
}

const fnProcessStartMenu = (answers: any) =>{
    console.log(answers);
}

export const fnProcessMenu = (command: string, answers:any) => {
    switch (command)
    {
        case commands.i: return fnProcessInitMenu(answers);
        case commands.s: return fnProcessStartMenu(answers);
    }
}