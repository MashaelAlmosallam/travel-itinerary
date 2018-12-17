import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import Schedule from "./Schedule";
class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} currentUser={this.props.currentUser} />
            )}
          />
          <Route
            exact
            path="/Schedule"
            render={props => (
              <Schedule {...props} currentUser={this.props.currentUser} />
            )}
          />
        </div>
      </HashRouter>
    );
  }
}

export default Router;
