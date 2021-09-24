import {fnGetEnvListValues, fnGetEnvValue, languages, questionsKeywords} from "../Util/Vars";
import {Answers} from "inquirer";
import {fnConfigLanguageEnv} from "../Util/Config";
import {fnFileExists} from "../files/Files";
import path from "path";

export const LanguageMenuQ = {
    type: 'list',
    default: languages[0],
    name: questionsKeywords.languages,
    message: 'Choose your language',
    choices: languages,
    filter: (val:string) => {
        const answer = val.toLowerCase();
        fnConfigLanguageEnv(answer);
        return answer;
    }
}

export const instantConfigQ = {
    type: 'list',
    name: questionsKeywords.instantClientConfig,
    default: (answer:Answers) => fnGetEnvValue('INSTANT_LOCAL'),
    message: (answer:Answers) => fnGetEnvValue('INSTANT_QUESTION'),
    choices: (answer:Answers) => fnGetEnvListValues(['INSTANT_LOCAL','INSTANT_GLOBAL'])
}

export const fhalcomNeedConfigQ = {
    type: 'confirm',
    name: questionsKeywords.fhalcomConfig,
    default: true,
    message: (answer:Answers) => fnGetEnvValue('NO_FHALCOM_CONFIG'),
    when: (answer:Answers) => !fnFileExists(path.resolve(process.cwd(),'fhalcom.config.json'))
}

export const instantClientPathQ = {
    type: 'input',
    name: questionsKeywords.instantClientPath,
    default: (answer:Answers) => fnGetEnvValue('INSTANT_DEFAULT_PATH'),
    message: (answer:Answers) => fnGetEnvValue('INSTANT_DEFAULT_PATHQ'),
    when: (answer:Answers) => {
        return answer[questionsKeywords.instantClientConfig] === fnGetEnvValue('INSTANT_LOCAL');
    },
    filter:(val:string) => path.resolve(process.cwd(),val)
}

export const connectionConfigQ = {
    type: 'list',
    name: questionsKeywords.connectionConfig,
    default: (answer:Answers) => fnGetEnvValue('ORA_CONFIG_FHALCOM'),
    message: (answer:Answers) => fnGetEnvValue('ORA_CONFIG_QUESTION'),
    choices: function(answer:Answers){return fnGetEnvListValues(['ORA_CONFIG_FHALCOM','ORA_CONFIG_CONSOLE'])}
}

export const FileExistQ = {
    type: 'confirm',
    default: false,
    name: questionsKeywords.file_exists,
    message: (answer:Answers) => fnGetQuestionMessage(questionsKeywords.file_exists),
    when: (answer:Answers) => fnFileExists(path.resolve(process.cwd(),`fhalcom.config.json`))
}

//============= Questions to config oracle connection ==============//

export const hostConfigQ = {
    type: 'input',
    name: questionsKeywords.hostConfig,
    default: (answer:Answers) => fnGetEnvValue('FHALCOM_DB_HOST'),
   message: (answer:Answers) => fnGetEnvValue('HOST_CONFIG_QUESTION'),
    when: (answer:Answers) => {return answer[questionsKeywords.connectionConfig] === fnGetEnvValue('ORA_CONFIG_CONSOLE')}
}

export const portConfigQ = {
    type: 'input',
    name: questionsKeywords.portConfig,
    default: (answer:Answers) => fnGetEnvValue('FHALCOM_DB_PORT'),
    message: (answer:Answers) => fnGetEnvValue('POR_CONFIG_QUESTION'),
    when: (answer:Answers) => {return answer[questionsKeywords.connectionConfig] === fnGetEnvValue('ORA_CONFIG_CONSOLE')}
}

export const dbNameConfigQ = {
    type: 'input',
    name: questionsKeywords.dbnameConfig,
    default: (answer:Answers) => fnGetEnvValue('FHALCOM_DB_DBNAME'),
    message: (answer:Answers) => fnGetEnvValue('DBNAME_CONFIG_QUESTION'),
    when: (answer:Answers) => {return answer[questionsKeywords.connectionConfig] === fnGetEnvValue('ORA_CONFIG_CONSOLE')}
}

export const userConfigQ = {
    type: 'input',
    name: questionsKeywords.dbuserConfig,
    default: (answer:Answers) => fnGetEnvValue('FHALCOM_DB_USER'),
    message: (answer:Answers) => fnGetEnvValue('USER_CONFIG_QUESTION'),
    when: (answer:Answers) => {return answer[questionsKeywords.connectionConfig] === fnGetEnvValue('ORA_CONFIG_CONSOLE')}
}

export const passConfigQ = {
    type: 'input',
    name: questionsKeywords.dbpasswordConfig,
    default: (answer:Answers) => fnGetEnvValue('FHALCOM_DB_PASSWORD'),
    message: (answer:Answers) => fnGetEnvValue('PASSWORD_CONFIG_QUESTION'),
    when: (answer:Answers) => {return answer[questionsKeywords.connectionConfig] === fnGetEnvValue('ORA_CONFIG_CONSOLE')}
}

//==================================================================//

const fnGetQuestionMessage = (questionsName:string) => {
    switch (questionsName) {
        case questionsKeywords.file_exists: return process.env.FILE_EXISTS_Q || questionsName;
        default:return questionsName;
    }
}

const InitQuestions = [
    LanguageMenuQ,
    FileExistQ
]

const GenerateEntityQuestions = [
    LanguageMenuQ,
    instantConfigQ,
    instantClientPathQ,
    fhalcomNeedConfigQ
   /* 
    connectionConfigQ,
    hostConfigQ,
    portConfigQ,
    dbNameConfigQ,
    userConfigQ,
    passConfigQ
   */
]

const Questions:object =
{
    init: InitQuestions,
    i: InitQuestions,
    start: GenerateEntityQuestions,
    s: GenerateEntityQuestions
};

// @ts-ignore
export const fnGetQuestions = (command:string, questions:object = Questions) => questions[`${command}`];
