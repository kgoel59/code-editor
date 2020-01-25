import React, { Component } from 'react';
import { Resizable } from "re-resizable";

import FolderMenu from './FolderMenu/FolderMenu';

class Sidebar extends Component {

    render() {
        return (
            <Resizable
            className="sidebar"
            defaultSize={{
                width: 250,
                height: '100vh'
            }}
            maxWidth="30%"
            minWidth="10%"
            >
                <FolderMenu 
                getFileTree={this.props.getFileTree}
                fCreateFile={this.props.fCreateFile}
                fRenameFile={this.props.fRenameFile}
                fDeleteFile={this.props.fDeleteFile}
                fCreateDir={this.props.fCreateDir}
                fRenameDir={this.props.fRenameDir}
                fDeleteDir={this.props.fDeleteDir}/>
                
            </Resizable>
        );
    }
}

export default Sidebar;