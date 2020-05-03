import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Component
import Login from "./views/user/login/login";
import Signup from "./views/user/signup/signup";
import Home from "./views/home/home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
