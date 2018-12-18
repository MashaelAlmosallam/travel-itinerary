import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import Schedule from "./Schedule";
import Place from "./Place";
class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                currentUser={this.props.currentUser}
                schedules={this.props.schedules}
              />
            )}
          />
          <Route
            exact
            path="/schedules/:id"
            render={props => (
              <Schedule {...props} currentUser={this.props.currentUser} />
            )}
          />
          <Route
            exact
            path="/Place"
            render={props => (
              <Place
                {...props}
                currentUser={this.props.currentUser}
                places={this.props.places}
              />
            )}
          />
        </div>
      </HashRouter>
    );
  }
}

export default Router;
