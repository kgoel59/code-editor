import React, { Component } from "react";
import { MDBInput } from "mdbreact";

class CodeArea extends Component {
  
  render() {
    return (
      <MDBInput
        type="textarea"
        label="Write Code Here"
        rows="20"
        onChange={event => this.props.handleCodeChange(event.target.value)}
      />
    );
  }
}

export default CodeArea;
