// import logo from "./images/ban-logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container } from '@mui/material'


import Home from "./pages/home.js";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <>
    <Navbar />
    <Container disableGutters sx={{objectFit:'fill'}}>
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
  </Container>
  </>
  );
}

export default App;
