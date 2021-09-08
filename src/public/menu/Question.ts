import {languages, questionsKeywords} from "../Util/Vars";
import dotenv from "dotenv";
import inquirer, {Answers} from "inquirer";
import {fnConfigLanguageEnv} from "../Util/Config";
import {fnFileExists} from "../files/Files";
import path from "path";

export const LanguageMenuQ = {
    type: 'list',
    default: languages[0],
    name: 'language',
    message: 'Choose your language',
    choices: languages,
    filter: (val:string) => {
        const answer = val.toLowerCase();
        fnConfigLanguageEnv(answer);
        return answer;
    }
}

const fnGetQuestionMessage = (questionsName:string) => {
    switch (questionsName) {
        case questionsKeywords.file_exists: return process.env.FILE_EXISTS_Q || questionsName;
        default:return questionsName;
    }
}


export const FileExistQ = {
    type: 'confirm',
    default: false,
    name: questionsKeywords.file_exists,
    message: function(answer:Answers){return fnGetQuestionMessage(questionsKeywords.file_exists);},
    when: (answer:Answers) => fnFileExists(path.resolve(process.cwd(),`fhalcom.config.json`))
}


const InitQuestions = [
    LanguageMenuQ,
    FileExistQ,
]


const GenerateEntityQuestions = [
    LanguageMenuQ,
    FileExistQ,
]

const questions:object =
{
    init: InitQuestions,
    i: InitQuestions,
    start: GenerateEntityQuestions,
    s: GenerateEntityQuestions
};

// @ts-ignore
export const fnGetQuestions = (command:string, q:object = questions) => q[`${command}`];
