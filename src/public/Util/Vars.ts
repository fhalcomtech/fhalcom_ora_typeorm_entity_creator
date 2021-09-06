import dotenvFlow from "dotenv-flow";
import path from "path";
export const env = dotenvFlow;


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
    env.load(path.resolve(process.cwd(), 'envs/fhalcom.config.env'));
    return `{
        host: ${process.env.FHALCOM_DB_HOST}, //${process.env.FHALCOM_DB_HOST_COMMENT}
    }`;
}
