import dotenvFlow from "dotenv-flow";
import path from "path";
import exp from "constants";
import {fnGetBasePath} from "../files/Files";
export const env = dotenvFlow;
export const basePathGlobal = fnGetBasePath(__dirname);

export const languages = ['English', 'Spanish'];


export const commands = {
    i:'init',
    init:'init',
    h:'help',
    help:'help'
};


export const questionsKeywords = {
    file_exists: 'file_exists'
}


export const fnGetFhalcomTemplate = () => {
    env.load([path.resolve(basePathGlobal, 'envs/fhalcom.config.env')]);
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
