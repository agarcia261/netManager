import React, { Component } from "react";
import axios from "axios";
// import "./style.css";

class Register extends Component {
  // Setting the initial values for main page information
  state = {
    FirstName: "",
    LastName: "",
    perID: "",
    Email: "",
    Role: "",
    Password: "",
    Password2: ""
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
    const register = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      perID: this.state.perID,
      Email: this.state.Email,
      Role: this.state.Role,
      Password: this.state.Password,
      Password2: this.state.Password2
    };
    console.log(register);
    return axios
      .get("/register")
      .then(res => {
        if (res.data.hasData) {
        }
        console.log(res);
        this.setState({
          FirstName: this.state.FirstName,
          LastName: this.state.LastName,
          perID: this.state.perID,
          Email: this.state.Email,
          Role: this.state.Role,
          Password: this.state.Password,
          Password2: this.state.Password2
        });
      })
      .catch(err => console.log(err))
      .then(
        this.setState({
          FirstName: "",
          LastName: "",
          perID: "",
          Email: "",
          Role: "",
          Password: "",
          Password2: ""
        })
      );
  };

  //render form and existing miror information
  render() {
    return (
      <div className="row content-container">
        <h3 className="title">Register</h3>
        <form
          className="col s12 form-class"
          id="add-customer"
          onSubmit={this.handleFormSubmit}
        >
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder=""
                id="firstname"
                type="text"
                name="FirstName"
                // className="autocomplete"
                value={this.state.FirstName}
                onChange={this.handleInputChange}
              />
              <label htmlFor="Username">First Name</label>
            </div>

            <div className="input-field col s6">
              <input
                placeholder=""
                id="lastname"
                type="text"
                name="LastName"
                className="autocomplete"
                value={this.state.LastName}
                onChange={this.handleInputChange}
              />
              <label htmlFor="LastName">Last Name</label>
            </div>

            <div className="input-field col s6">
              <input
                placeholder=""
                id="perID"
                type="text"
                name="perID"
                className="autocomplete"
                value={this.state.perID}
                onChange={this.handleInputChange}
              />
              <label htmlFor="perID">ID</label>
            </div>

            <div className="input-field col s6">
              <input
                placeholder=""
                id="email"
                type="text"
                name="Email"
                className="autocomplete"
                value={this.state.Email}
                onChange={this.handleInputChange}
              />
              <label htmlFor="Email">Email</label>
            </div>

            <div className="input-field col s6">
              <input
                placeholder=""
                id="role"
                type="text"
                name="Role"
                className="autocomplete"
                value={this.state.Role}
                onChange={this.handleInputChange}
              />
              <label htmlFor="Role">Role</label>
            </div>


            <div className="input-field col s6">
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

            <div className="input-field col s6">
              <input
                placeholder=""
                id="password2"
                type="text"
                name="Password2"
                className="autocomplete"
                value={this.state.Password2}
                onChange={this.handleInputChange}
              />
              <label htmlFor="Password">Password2</label>
            </div>


            <button
              type="submit"
              className="btn-floating  scale-transition btn"
            >
              <i className="material-icons">add</i>
            </button>
          </div>
        </form>

        <div>{/* Dwhat's next?*/}</div>
      </div>
    );
  }
}

export default Register;