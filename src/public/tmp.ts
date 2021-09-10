import {google} from "googleapis";
import * as fs from "fs";
import path from "path";
const fileIdGoogle = '1X7TtIcbu01AuV3sxRV27-L5sPMYTV9zM';

const fnDowloadFile = (auth:string='AIzaSyAb285Uq_S-afiNJI-O0C5-15nheqeznig',fileId:string=fileIdGoogle) =>
{
    const drive = google.drive({version: "v3", key:`${process.env.FHALCOM_DRIVE_KEY || auth}`})
    const dest = fs.createWriteStream(path.resolve(process.cwd(), 'oracle/instantclient.zip'));
    drive.files.get({fileId: fileId, alt: 'media'},{responseType:'stream'},(err,res)=> {
        if(err) return console.log(err);
        console.log(res);
    });
}

fnDowloadFile();