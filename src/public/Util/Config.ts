import dotenv from "dotenv";
import path from "path";

export const fnConfigLanguageEnv  = (language:string):void => {
    dotenv.config({path: path.resolve(process.cwd(),`language.${language}.env`)});
    console.log(process.env.LANGUAGE);
}