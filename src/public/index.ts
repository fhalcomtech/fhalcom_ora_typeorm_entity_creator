#!/usr/bin/env node
import minimist from 'minimist';
import {fnCreateFile} from "./files/Files";
/*
fnCreateFile('','entity2','ts');
*/

const fnRunCli = ():void => {
    console.log(process.cwd())
    const args = minimist(process.argv.slice(2));
    console.log(args);
    const fileSaved = fnCreateFile('build/entity','entity2','ts');
    console.log(fileSaved);
}

fnRunCli();