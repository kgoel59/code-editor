import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import {randomBytes} from 'crypto';
import io from "socket.io-client";

import NavBar from "./NavBar";
import CodeArea from "./CodeArea";
import InputArea from "./InputArea";

class MainScreen extends Component {
  state = {
    server: "http://ec2-54-145-157-213.compute-1.amazonaws.com:5000/",
    output: "",
    exec_time: "",
    err: "",
    code: "",
    input: "",
    machine:
      window.location.protocol + "//" + window.location.hostname + ":" + 5000
  };

  compile = async () => {
    const { code, input } = this.state;
    const { server } = this.state;
    const socket = io.connect(server);
    let params = {
      id: randomBytes(10).toString('hex'),
      code: code,
      input: input,
      language: "C++"
    };
    
    socket.emit("compile", { code: code, params: params });

    socket.on(params.id, data => this.setState({output: data.output, exec_time: data.exec_time, err: data.err}));

    
  };

  componentDidMount = () => {
    
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
        {"Output: " + this.state.output + "  Execution Time: "+this.state.exec_time + "Err: "+ this.state.err}
        
      </MDBContainer>
    );
  }
}

export default MainScreen;
