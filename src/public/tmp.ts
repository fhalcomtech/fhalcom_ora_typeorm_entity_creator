import request from 'superagent';
import fs from 'fs';

// TODO: change to where your zip file is located
const repoName = 'repo';
const href = `https://github.com/digitaldrummerj/${repoName}/archive`;
const zipFile = 'instantclient.zip';

const source =  'https://drive.google.com/u/0/uc?export=download&confirm=tcRn&id=1X7TtIcbu01AuV3sxRV27-L5sPMYTV9zM' //`${href}/${zipFile}`;

// TODO: change to the directory instead of the zip that you want to extract
const extractEntryTo = `${repoName}/`;

// TODO: change to the directory where you want to extract to
const outputDir = `${repoName}/`;

request
    .get(source)
    .on('error', function(error) {
        console.log(error);
    })
    .pipe(fs.createWriteStream(zipFile))
    .on('finish', function() {
        // add code below to here
    });