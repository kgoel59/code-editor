import React from 'react';

const btnDir = (createDir) => {
    return (
        <>
        <i className="fa fa-folder" aria-hidden="true" onClick={createDir}></i>
        <i className="fa fa-file" aria-hidden="true"></i>
        <i className="fa fa-i-cursor" aria-hidden="true"></i>
        <i className="fa fa-trash" aria-hidden="true"></i>
        </>
    );
}

const btnFile = () => {
    return (
        <>
        <i className="fa fa-i-cursor" aria-hidden="true"></i>
        <i className="fa fa-trash" aria-hidden="true"></i>
        </>
    );
}

const typeControl = (active,createDir) => {
    if(active !== null) {
        if(active.leaf === true) {
            return btnFile();
        } else {
            return btnDir(createDir);
        }
    }
}


function FolderTrigger({toggle,name,open,active,createDir}) {
    return (
        <div className="trigger-folder">
            {name}
            <span className="buttons">
                <span className="actions">
                    {typeControl(active,createDir)}
                <span className="carret" onClick={toggle}>
                    {open === true ? '^' : '>'}
                </span>
                </span>
            </span>
        </div>
    );
}

export default FolderTrigger;