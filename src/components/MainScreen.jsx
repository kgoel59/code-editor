import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { randomBytes } from "crypto";
import io from "socket.io-client";

import NavBar from "./NavBar";
import CodeArea from "./CodeArea";
import InputArea from "./InputArea";

// general ip 
let machine = window.location.protocol + "//" + window.location.hostname + ":" + 5000;
class MainScreen extends Component {
  valueGetter = React.createRef();

  state = {
    server: machine,
    output: "",
    exec_time: "",
    err: "",
    code: "",
    input: "",
  };

  compile = async () => {
    const { code, input } = this.state;
    const { server } = this.state;
    const socket = io.connect(server);
    let params = {
      id: randomBytes(10).toString("hex"),
      code: code,
      input: input,
      language: "C++"
    };

    socket.emit("compile", { code: code, params: params });

    socket.on(params.id, async data => {
      await this.setState({
        output: data.output,
        exec_time: data.exec_time,
        err: data.err
      });
      alert(this.state.output);
    });
  };

  handleCodeSubmit = async () => {
    await this.setState({ code: this.valueGetter.current() });
    this.compile();
  };

  handleInputChange = data => {
    this.setState({ input: data });
  };

  handleEditorDidMount = _valueGetter => {
    this.valueGetter.current = _valueGetter;
  };

  render() {
    return (
      <MDBContainer fluid>
        <NavBar />
        <MDBRow>
          <MDBCol md="7">
            <CodeArea handleEditorDidMount={this.handleEditorDidMount} />
          </MDBCol>
          <MDBCol md="4">
            <InputArea handleInputChange={this.handleInputChange} />
            <MDBBtn color="indigo" onClick={this.handleCodeSubmit}>
              Compile
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        {"Output: " +
          this.state.output +
          "  Execution Time: " +
          this.state.exec_time +
          "Err: " +
          this.state.err}
      </MDBContainer>
    );
  }
}

export default MainScreen;
