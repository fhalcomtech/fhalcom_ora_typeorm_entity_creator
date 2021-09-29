#!/usr/bin/env node
import minimist from 'minimist';
import {fnMainMenu} from "./Menu/Menu";
import ColorText from "./Util/ColorText";
import {basePathGlobal, commands, env} from "./Util/Vars";
import path from "path";

env.load([path.resolve(basePathGlobal, 'envs/fhalcom.config.env')]);

const fnRunCli = ():void => {
    const  args = minimist(process.argv.slice(2));
    const colorText = new ColorText();
    let command = "";
    // @ts-ignore
    if(args['_'].length > 0 && args['_'][0] && commands[`${args['_'][0]}`]){
        command = args['_'][0];
        fnMainMenu(command);
    }
    else {colorText.error(`${args["_"][0]} was not a command`);}
}

fnRunCli();