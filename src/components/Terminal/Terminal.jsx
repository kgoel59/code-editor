import React, { Component } from 'react';
import { FormTextarea, Nav, NavItem } from "shards-react";

class Terminal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: 0
        }
    }

    setItem = (num) => {
        this.setState({
            item: num
        })
    }

    getPannel = () => {
        if(this.state.item === 0) {
            return (
                <div className="input">
                    <FormTextarea className="input-area"/>
                </div>
            );
        } else if(this.state.item === 1) {
            return (
                <div className="output">                                                
                    <div className="output-area">
                    </div>
                </div> 
            );
        }
    }

    getMenu = (num, value) => {
        if(num === this.state.item) {
            return (
                <span style={{color: 'white'}}>{value}</span>
            );
        } else {
            return (
                <span>{value}</span>
            );
        }
    }

    render() {
        return (
            <div className="terminal">
                <Nav className="menu">
                    <NavItem onClick={()=>{this.setItem(0)}}>
                        {this.getMenu(0,'INPUT')}
                    </NavItem>
                    <NavItem onClick={()=>{this.setItem(1)}}>
                        {this.getMenu(1,'OUTPUT')}
                    </NavItem>
                </Nav>

                <div className="io">
                    {this.getPannel()}
                </div>               
            </div>
        );
    }
}

export default Terminal;