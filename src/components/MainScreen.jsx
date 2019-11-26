import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";

import NavBar from "./NavBar";
import CodeArea from "./CodeArea";
import InputArea from "./InputArea";

class MainScreen extends Component {
  state = {
    output: "",
    code: "",
    input: "",
    machine:
      window.location.protocol + "//" + window.location.hostname + ":" + 5000
  };

  compile = async () => {
    let { code, input } = this.state;
    const params = {
      timeStamp: Date.now(),
      code: code,
      input: input
    };
    await axios
      .get(this.state.machine + "/compile-cpp", { params })
      .then(res => this.setState({ output: res.data }));
  };

  handleCodeChange = data => {
    this.setState({ code: data });
  };

  handleInputChange = data => {
    this.setState({ input: data });
  };

  render() {
    return (
      <MDBContainer fluid>
        <NavBar />
        <MDBRow>
          <MDBCol md="7">
            <CodeArea handleCodeChange={this.handleCodeChange} />
          </MDBCol>
          <MDBCol md="4">
            <InputArea handleInputChange={this.handleInputChange} />
            <MDBBtn color="indigo" onClick={this.compile}>
              Compile
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        {this.state.output}
      </MDBContainer>
    );
  }
}

export default MainScreen;
