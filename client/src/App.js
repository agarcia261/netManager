import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Mirror from "./components/pages/Mirror";
import Main from "./components/pages/Main";
import "./App.css";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Nav/>
          <Route exact path="/" component={Main} />
          <Route exact path="/mirror" component={Mirror} />
        </div>
      </Router>   
    );
  }
}

export default App;


