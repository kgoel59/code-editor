import React, { Component} from "react";
import Editor from '@monaco-editor/react';

class CodeArea extends Component {
  
  render() {
    return (

      <Editor height='90vh' language='cpp' editorDidMount={this.props.handleEditorDidMount} theme='dark'/>
    );
  }
}

export default CodeArea;
