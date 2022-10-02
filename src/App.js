// import logo from "./images/ban-logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import Home from "./home.js";

function App() {

  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
  );
}

export default App;
