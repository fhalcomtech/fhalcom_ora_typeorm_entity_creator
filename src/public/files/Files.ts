import fs from "fs";

export type fileCreate = {
    path:string;
    isSaved:boolean;
}

const fnFixPath = (path:string):string => {
    let isSlash = false;
    if(path && path.trim().length > 0) {let isSlash = process.cwd().includes("/");}
    if(isSlash) return path.replace(/\\/g, "/");
    else return path.replace(/\//g,"\\");
}


export const fnCreateFolder = (filePath:string):fileCreate => {

    let path = "";
    const basePath = process.cwd();
    path=basePath;
    let result:fileCreate={path:"",isSaved:false};
    if(filePath && filePath.trim().length>0) path = `${path}/${filePath}`;
    path = fnFixPath(path);
    if(!fs.existsSync(path))
    {
        console.log(`Creating folder in ${path}...`);
        fs.mkdir(path,err => {
            if(err) return console.error("cannot create directory");
            else
            {
                result.isSaved = true;
                result.path = path;
                return console.log("folder was create");
            }
        });
    }
    else{
        result.isSaved = true;
        result.path = path;
    }
    return result;
}

export const fnCreateFile = (filePath:string, fileName:string, fileExt:string ):fileCreate=>{
    let path = "";
    let result:fileCreate = {isSaved:false, path:""};
    const createFolder = fnCreateFolder(filePath);
    if(createFolder.isSaved) {
        path = createFolder.path;
        path = `${path}/${fileName}.${fileExt}`;
        path = fnFixPath(path);
        fs.writeFile(`${path}`,
            ``,
            err => {
                if (err) return console.error("cannot create file");
                else
                {
                    return console.error("file was created");
                    result.path=path;
                    result.isSaved=true;
                }
            });
    }
    return result;
}

fnCreateFile('build/entity','entity2','ts');