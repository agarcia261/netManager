import React, { Component } from "react";
import axios from "axios";
// import "./style.css";

class Login extends Component {
  // Setting the initial values for main page information
  state = {
    Username: "",
    Password: ""
  };

 
  // handle any changes to the input fields
  handleInputChange = event => {
    // Get customer name
    const { name, value } = event.target;
    // console.log(event.target);
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // User submit user credentials
  handleFormSubmit = event => {
    event.preventDefault();
    const login = {
        Username: this.state.Username,
        Password: this.state.Password
    };
    console.log(login);
    return axios
    .get("/login")
    .then(res => {
      if (res.data.hasData){}
      console.log(res)
        this.setState({
            Username: this.state.Username,
            Password: this.state.Password
        })
      })
      .catch(err => console.log(err))
      .then(
        this.setState({
            Username: " ",
            Password: " "
        })
      );
  };

  //render form and existing miror information
  render() {
    return (
      <div className="row content-container">
       
        <h3 className="title">Enter Credentials</h3>
        <form
          className="col s12 form-class"
          id="add-customer"
          onSubmit={this.handleFormSubmit}
        >
          <div className="row">
            <div className="input-field col s12m m4">
              <input
                placeholder=""
                id="username"
                type="text"
                name="Username"
                className="autocomplete"
                value={this.state.Username}
                onChange={this.handleInputChange}
              />
              <label htmlFor="Username">Username</label>
            </div>

            <div className="input-field col s12m m4">
              <input
                placeholder=""
                id="password"
                type="text"
                name="Password"
                className="autocomplete"
                value={this.state.Password}
                onChange={this.handleInputChange}
              />
              <label htmlFor="Password">Password</label>
            </div>
            <button
              type="submit"
              className="btn-floating  scale-transition btn"
            >
              <i className="material-icons">add</i>
            </button>
          </div>
        </form>

        <div>
         {/* Dwhat's next?*/}
        </div>
      </div>
    );
  }
}



export default Login;

{/* <script src="/javascript/users.js"></script> */}