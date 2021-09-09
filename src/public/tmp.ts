import {google} from "googleapis";


const fnDowloadFile = (auth:string='AIzaSyAb285Uq_S-afiNJI-O0C5-15nheqeznig') =>
{
    const drive = google.drive({version: "v3", key:`${process.env.FHALCOM_DRIVE_KEY || auth}`})

}