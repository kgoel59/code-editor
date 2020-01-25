import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import routes from 'routes/routes';

class App extends Component {
    render() {
        return (
            <Router basename={process.env.REACT_APP_BASENAME || ""}>
            <div>
              {routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={() => {
                      return (
                        <route.layout 
                        getFileTree={this.props.getFileTree}
                        fCreateFile={this.props.fCreateFile}
                        fRenameFile={this.props.fRenameFile}
                        fDeleteFile={this.props.fDeleteFile}
                        fCreateDir={this.props.fCreateDir}
                        fRenameDir={this.props.fRenameDir}
                        fDeleteDir={this.props.fDeleteDir}>
                          <route.component 
                          getFileData={this.props.getFileData}
                          saveFileData={this.props.saveFileData}/>
                        </route.layout>
                      );
                    }}
                  />
                );
              })}
            </div>
          </Router>
        );
    }
}

export default App;
