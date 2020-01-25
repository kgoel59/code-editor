import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";
import 'assets/sass/index.scss';

function getFileTree() {
    return require('./sample/test.json');
}

function fCreateFile() {
    console.log("file created");
}

function fRenameFile() {
    console.log("file rename");
}

function fDeleteFile() {
    console.log("file deleted");
}

function fCreateDir() {
    console.log("dir created");
}

function fRenameDir() {
    console.log("dir rename");
}

function fDeleteDir() {
    console.log("dir deleted");
}

function getFileData() {
    return (JSON.stringify(require('./sample/sample.json'),null,4));
}

function saveFileData(path,data) {
    console.log(path,data," saved");
}



ReactDOM.render(
<App 
getFileTree={getFileTree}
fCreateFile={fCreateFile}
fRenameFile={fRenameFile}
fDeleteFile={fDeleteFile}
fCreateDir={fCreateDir}
fRenameDir={fRenameDir}
fDeleteDir={fDeleteDir}
getFileData={getFileData}
saveFileData={saveFileData}
/>
    , document.querySelector("#root"));