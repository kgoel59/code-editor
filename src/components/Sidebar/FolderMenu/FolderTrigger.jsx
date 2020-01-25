import React from 'react';

const btnDir = (createDir, createFile, rename, deleteNode) => {
    return (
        <>
        <i className="fa fa-folder" aria-hidden="true" onClick={createDir}></i>
        <i className="fa fa-file" onClick={createFile} aria-hidden="true"></i>
        <i className="fa fa-i-cursor" onClick={rename} aria-hidden="true"></i>
        <i className="fa fa-trash" onClick={()=>{deleteNode()}} aria-hidden="true"></i>
        </>
    );
}

const btnFile = (rename, deleteNode) => {
    return (
        <>
        <i className="fa fa-i-cursor" onClick={rename} aria-hidden="true"></i>
        <i className="fa fa-trash" onClick={()=>{deleteNode()}} aria-hidden="true"></i>
        </>
    );
}

const typeControl = (active,createDir,createFile,rename,deleteNode) => {
    if(active !== null) {
        if(active.leaf === true) {
            return btnFile(rename,deleteNode);
        } else {
            return btnDir(createDir,createFile,rename,deleteNode);
        }
    }
}


function FolderTrigger({toggle,name,open,active,createDir,createFile,rename,deleteNode}) {
    return (
        <div className="trigger-folder">
            {name}
            <span className="buttons">
                <span className="actions">
                    {typeControl(active,createDir,createFile,rename,deleteNode)}
                <span className="carret" onClick={toggle}>
                    {open === true ? '^' : '>'}
                </span>
                </span>
            </span>
        </div>
    );
}

export default FolderTrigger;