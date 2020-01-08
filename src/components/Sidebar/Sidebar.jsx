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
                <FolderMenu/>
            </Resizable>
        );
    }
}

export default Sidebar;