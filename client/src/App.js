import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Nav from "./components/Nav";
import Mirror from "./components/pages/Mirror";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          {/* <Route exact path="/" component={Search} /> */}
          <Route exact path="/mirror" component={Mirror} />
        </div>
      </Router>   
    );
  }
}

export default App;


