import fs from "fs";
import path from "path";
const NodePath = path;

export type fileCreate = {
    path:string;
    isSaved:boolean;
}

const fnFixPath = (path:string):string => {
    let isSlash = false;
    if(path && path.trim().length > 0)
    {isSlash = process.cwd().slice(0,1).includes("/");}
    if(isSlash) return path.replace(/\\/g, "/");
    else return path.replace(/\//g,`\\`);
}


export const fnCreateFolder = (filePath:string):fileCreate => {
    let path = "";
    const basePath = process.cwd();
    path=basePath;
    let result:fileCreate={path:"",isSaved:false};
    if(filePath && filePath.trim().length>0) path = NodePath.resolve(basePath,filePath);
    //path = fnFixPath(path);
    if(!fs.existsSync(path))
    {
        console.log(`Creating directory in ${path}`);
        fs.mkdirSync(path,{ recursive: true });
                result.isSaved = true;
                result.path = path;
                console.log("directory was create");
    }
    else{
        result.isSaved = true;
        result.path = path;
    }
    return result;
}

export const fnCreateFile = (filePath:string, fileName:string, fileExt:string, fileText:string = ""):fileCreate=>{
    let path = "";
    let result:fileCreate = {isSaved:false, path:""};

    const folderData:fileCreate = fnCreateFolder(filePath);

    if(folderData.isSaved)
    {
        path = folderData.path;

        /*
        path = `${path}/${fileName}.${fileExt}`;
        path = fnFixPath(path);
        */

        path = NodePath.join(path,`${fileName}.${fileExt}`);

        fs.writeFileSync(`${path}`, fileText);
        result.path = path;
        result.isSaved = true;
        console.log(`file was create in ${path}`);
    }
    return result;
}

export const fnFileExists = (filePath:string) => {
    const path = fnFixPath(filePath);
    return fs.existsSync(path);
}