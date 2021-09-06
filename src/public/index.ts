#!/usr/bin/env node
import minimist from 'minimist';
import {fnCreateFile, fnFileExists} from "./files/Files";
import {fnMainMenu} from "./menu/MainMenu";
import ColorText from "./Util/ColorText";
import {commands} from "./Util/Vars";

const fnRunCli = ():void => {
    const  args = minimist(process.argv.slice(2));
    const colorText = new ColorText();
    let command = "";
    console.log(args)
    if(commands.indexOf(args['_'][0]) > -1 ){
        command = args['_'][0];
        fnMainMenu(command);
    }
    else {colorText.error(`${args["_"][0]} was not a command`)}
}

fnRunCli();