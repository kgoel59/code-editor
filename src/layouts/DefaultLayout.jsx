import React, { Component } from 'react';

import Sidebar from 'components/Sidebar/Sidebar'
import Terminal from 'components/Terminal/Terminal'

class DefaultLayout extends Component {
    render() {
        return (
            <div className="default-layout">
                <Sidebar
                getFileTree={this.props.getFileTree}
                fCreateFile={this.props.fCreateFile}
                fRenameFile={this.props.fRenameFile}
                fDeleteFile={this.props.fDeleteFile}
                fCreateDir={this.props.fCreateDir}
                fRenameDir={this.props.fRenameDir}
                fDeleteDir={this.props.fDeleteDir}/>
                
                <div className="main">
                        <div className="pannel">
                            {this.props.children}
                        </div>
                        <Terminal/>
                </div>
            </div>
        );
    }
}

export default DefaultLayout;