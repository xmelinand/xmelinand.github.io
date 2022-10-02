// import logo from "./images/ban-logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Home from "./home.js";

function App() {

  return (
    <Router>
    <Routes>
      <Route exact path="/" component={Home} />
    </Routes>
  </Router>
  );
}

export default App;
