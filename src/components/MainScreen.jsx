import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";
import io from "socket.io-client";

import NavBar from "./NavBar";
import CodeArea from "./CodeArea";
import InputArea from "./InputArea";

class MainScreen extends Component {
  state = {
    server: "http://localhost:5000",
    output: "",
    time_taken: "",
    code: "",
    input: "",
    machine:
      window.location.protocol + "//" + window.location.hostname + ":" + 5000
  };

  compile = async () => {
    let { code, input } = this.state;
    //const { server } = this.state;
    // const socket = io.connect(server);
    let params = {
      code: code,
      input: input,
      language: "C++"
    };
    
    
    // socket.emit("compile", { code: code, params: params });

    

    // socket.on(params.id, data => this.setState({output:data.out}));
    await axios
      .post("http://localhost:5000/compile", {
        params
      })
      .then(
        res =>
          // this.setState({
          //   output: res.data
          //   //time_taken: res.data.time.time_taken
          // })
         console.log(res.data)
      );

    
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
        {this.state.output + "\n"}
        {this.state.time_taken + "\n"}
      </MDBContainer>
    );
  }
}

export default MainScreen;
