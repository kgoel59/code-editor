import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import Tree from 'react-ui-tree';
import ScrollArea from 'react-scrollbar';
import cx from 'classnames';

import FolderTrigger from './FolderTrigger';

import {createTree} from '../utils/treeParser';

class FolderMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openMenu: false,
            tree:  createTree('src',require('./sample/test.json')),
            active: null
        }
    }

    handleChange = tree => {
        this.setState({
          tree: tree
        });
    };

    onClickNode = node => {
        this.setState({
          active: node
        });
    };

    createNode = node => {
        if(node.leaf === true) {
          return (
            <>
              {node.module}
            </>
          )
        } else {
          return (
            <>
             <span onClick={()=>{
               if(node.collapsed === false) {
                 node.collapsed = true;
               } else {
                 node.collapsed = false;
               }
             }} className="carret">
                {node.collapsed === true? '> ' : '^ '} 
              </span> 
              {node.module} 
            </>
          );
        }
      };
      
      renderNode = (node) => {
        return (
          <span
            className={cx('node', {
              'is-active': node === this.state.active
            })}
            onClick={this.onClickNode.bind(null, node)}
          >
            {this.createNode(node)}
          </span>
        );
      };

    toggleMenu = () => {
        this.setState(prevState => ({
            openMenu: !prevState.openMenu
        }))
    }

    createDir = () => {
        console.log(this.state.active);
        let node = this.state.active;
        node.collapsed = false;
    }
      

    render() {
        return (
            <Collapsible 
            trigger={
                <FolderTrigger name='Project'
                 open={this.state.openMenu}
                 active={this.state.active}
                 createDir={this.createDir}
                 toggle={this.toggleMenu}/>
            }
            open={this.state.openMenu}
            handleTriggerClick={()=>{}}
            overflowWhenOpen='auto'>
                <ScrollArea
                speed={0.8}
                className="tree"
                contentClassName="content"
                horizontal={false}
                smoothScrolling= {true}>
                  <Tree
                    paddingLeft={20}
                    tree={this.state.tree}
                    onChange={this.handleChange}
                    isNodeCollapsed={this.isNodeCollapsed}
                    renderNode={this.renderNode}
                  />
                </ScrollArea>
            </Collapsible>
        );
    }
}

export default FolderMenu;