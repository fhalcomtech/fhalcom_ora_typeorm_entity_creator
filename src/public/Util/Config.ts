import path from "path";
import {basePathGlobal, env} from "./Vars";

export const fnConfigLanguageEnv  = (language:string):void => {
    console.log(path.resolve(basePathGlobal,`envs/language.${language}.env`));
    env.load([path.resolve(basePathGlobal,`envs/language.${language}.env`)]);
}