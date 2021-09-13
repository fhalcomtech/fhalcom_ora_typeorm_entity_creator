import dotenvFlow from "dotenv-flow";
import path from "path";
import {fnGetBasePath} from "../files/Files";
import {hostConfigQ} from "../menu/Question";
export const env = dotenvFlow;
export const basePathGlobal = fnGetBasePath(__dirname);

//List definitions for questions
export const languages = ['English', 'Spanish'];
export const instantConfigs = [process.env.INSTANT_LOCAL, process.env.INSTANT_GLOBAL];
export const connectionConfigs = [process.env.ORA_CONFIG_CONSOLE, process.env.ORA_CONFIG_FHALCOM];

export const configType = {
    console: process.env.ORA_CONFIG_CONSOLE,
    fhalcom: process.env.ORA_CONFIG_FHALCOM
};


export const commands = {
    i:'init',
    init:'init',
    h:'help',
    help:'help',
    start: 'start',
    s: 'start'
};




export const questionsKeywords = {
    file_exists: 'file_exists',
    languages: 'languages',
    instantClientConfig: 'instantclient',
    connectionConfig: 'connection',
    hostConfig: 'host',
    portConfig: 'port'
}


export const fnGetEnvListValues = (keys:string[]) => keys.map(key => process.env[key]);
export const fnGetEnvValue = (key:string) => process.env[key];
export const fnGetFhalcomTemplate = () => {
    return `{
        "host": "${process.env.FHALCOM_DB_HOST}", //${process.env.FHALCOM_DB_HOST_COMMENT},
        "port": ${process.env.FHALCOM_DB_PORT}, //${process.env.FHALCOM_DB_PORT_COMMENT},
        "user": "${process.env.FHALCOM_DB_USER}", //${process.env.FHALCOM_DB_USER_COMMENT},
        "password": "${process.env.FHALCOM_DB_PASSWORD}", //${process.env.FHALCOM_DB_PASSWORD_COMMENT},
        "dbname": "${process.env.FHALCOM_DB_DBNAME}", //${process.env.FHALCOM_DB_DBNAME_COMMENT},
        "schemas": "${process.env.FHALCOM_DB_SCHEMAS}", //${process.env.FHALCOM_DB_SCHEMAS_COMMENT},
        "tables": ${process.env.FHALCOM_DB_TABLES}, //${process.env.FHALCOM_DB_TABLES_COMMENT},
        "exclude": ${process.env.FHALCOM_DB_EXCLUDE} //${process.env.FHALCOM_DB_EXCLUDE_COMMENT}
    }`;
}
