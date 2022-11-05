// import logo from "./images/ban-logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container } from '@mui/material'


import Home from "./pages/home.js";
import Navbar from "./components/Navbar";
import links from "./reducers/links";
import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';

const store = createStore(combineReducers({links}));


function App() {
  
  return (
    <Provider store={store}>
    <Navbar />
    <Container disableGutters sx={{objectFit:'fill'}}>
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
  </Container>
  </Provider>
  );
}

export default App;
