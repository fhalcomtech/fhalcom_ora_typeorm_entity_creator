#!/usr/bin/env node
import minimist from 'minimist';
import {fnMainMenu} from "./menu/Menu";
import ColorText from "./Util/ColorText";
import {commands} from "./Util/Vars";
import oracledb from "oracledb";

import path from "path";
/*
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
const initConnection = {libDir: path.resolve(process.cwd(), "oracle/instantclient_win")}

const dbConnection = {
    user: "username"
    ,password: "secretpassword"
    ,connectString: `(DESCRIPTION = (ADDRESS_LIST = (ADDRESS = (COMMUNITY = tcp.world)(PROTOCOL = TCP)(Host = 192.168.100.100)(Port = 1521)))(CONNECT_DATA = (SID = dbname)))`
}

oracledb.initOracleClient(initConnection);
oracledb.getConnection(dbConnection).then(value => console.log('Estas Conectado...'));
*/

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