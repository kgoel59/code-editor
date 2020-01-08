import React, { Component } from 'react';

import Sidebar from 'components/Sidebar/Sidebar'
import Terminal from 'components/Terminal/Terminal'

class DefaultLayout extends Component {
    render() {
        return (
            <div className="default-layout">
                <Sidebar/>
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