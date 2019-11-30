import React, { Component } from "react";
import { MDBInput } from "mdbreact";

class InputArea extends Component {
  render() {
    return (
      <MDBInput
        type="textarea"
        label="Write Inputs Here"
        rows="10"
        onChange={event => this.props.handleInputChange(event.target.value)}
      />
    );
  }
}

export default InputArea;
