import React, { Component} from "react";
import Editor from '@monaco-editor/react';

class CodeArea extends Component {
  render() {
    return (
      <Editor height='75vh' language='javascript' editorDidMount={this.props.handleEditorDidMount} theme='dark' className="editor"/>
    );
  }
}

export default CodeArea;
