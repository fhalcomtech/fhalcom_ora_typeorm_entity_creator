import {languages} from "../Util/Vars";
import dotenv from "dotenv";

export const LanguageMenuQ = {
    type: 'list',
    default: languages[0],
    name: 'language',
    message: 'Choose your language',
    choices: languages,
    filter: (val:string) => val.toLowerCase(),
    when: (val:string) => {
        dotenv.config({path:`language.${val.toLowerCase()}.env`});
        return true;
    }
}