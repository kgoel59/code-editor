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
            openMenu: true,
            tree:  createTree('src',this.props.getFileTree()),
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
        let name = prompt('Enter dir name');
        let node = this.state.active;
        node.collapsed = false;
        node.children.push({module: name, children: [], collapsed: true});
        this.props.fCreateDir();
        this.forceUpdate();
    }

    createFile = () => {
      let name = prompt('Enter file name');
      let node = this.state.active;
      node.collapsed = false;
      node.children.push({module: name, leaf: true})
      this.props.fCreateFile();
      this.forceUpdate();
    }

    rename = () => {
      let node = this.state.active;
      let name = prompt('Enter new name',node.module);
      if(name) {
        node.module = name;
        if(node.leaf) {
          this.props.fRenameFile();
        } else {
          this.props.fRenameDir();
        }
        this.forceUpdate(); 
      }
    }

    deleteNode = (node,parent,index) => {
      let active = this.state.active;
      if(node === undefined) {
        node = this.state.tree;
        if(node.module === active.module) {
          node.children = []
          
          if(node.leaf) {
            this.props.fDeleteFile();
          } else {
            this.props.fDeleteDir();
          }

          this.forceUpdate();
        } else {
          for(let i=0;i<node.children.length;i++) {
            this.deleteNode(node.children[i],node,i);
          }
        }
      } else {
        if(node.module === active.module) {
          parent.children.splice(index,1);

          if(node.leaf) {
            this.props.fDeleteFile();
          } else {
            this.props.fDeleteDir();
          }
          
          this.forceUpdate();
        } else {
          if(!node.leaf) {
            for(let i=0;i<node.children.length;i++) {
              this.deleteNode(node.children[i],node,i);
            }
          }
        }
      }
    }
      

    render() {
        return (
            <Collapsible 
            trigger={
                <FolderTrigger name='Project'
                 open={this.state.openMenu}
                 active={this.state.active}
                 createDir={this.createDir}
                 createFile={this.createFile}
                 rename={this.rename}
                 deleteNode={this.deleteNode}
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