import React, { Component } from "react";
import axios from "axios";
import DateTime from "react-datetime";
import Tables from "../../../components/Tables";
import "./style.css";

class Mirror extends Component {
  // Setting the initial values for miror information
  state = {
    router: "",
    sap: "",
    expiration: "",
    mirrorArr: []
  };

  handleDateTimePicker = (moment, name) =>
    this.setState({ [name]: moment.toDate() });

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    // console.log(event.target);

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  loadMirrors = () => {
    axios
      .get("/api/mirror")
      .then(res => this.setState({ mirrorArr: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadMirrors();
  }

  componentDidUpdate() {
    this.loadMirrors();
  }

  deleteMirror = id => {
    axios
      .delete("/api/mirror/" + id)
      .then(json => this.setState({ mirrorArr: json.data }))
      .catch(err => console.log(err));
  };

  // form submission
  handleFormSubmit = event => {
    event.preventDefault();
    // this will be posted within a route the function is not being called
    const data = {
      router: this.state.router,
      sap: this.state.sap,
      expiration: this.state.expiration
    };
    console.log(data);
    return (
      axios
        .post("/api/mirror", data)
        //create post request to post data so that addMirror has access to it
        .then(res => this.setState({ newMirror: res.data }))
        .catch(err => console.log(err))
        .then(
          this.setState({
            router: "",
            sap: "",
            expiration: ""
          })
        )
    );
  };

  //DateTime not available for past dates
  valid = current => {
    return current.isAfter(DateTime.moment().subtract(1, "day"));
  };

  //render form and existing miror information
  render() {
    return (
      

      <div className="row content-container">
      
      {/* <img className="fit-picture"src=".../components/images/logo.png" alt="logo" /> */}

        <h3 className="title">Add A New Mirror</h3>
        <form
          className="col s12 form-class"
          id="add-mirror"
          onSubmit={this.handleFormSubmit}
        >
          <div className="row">
            <div className="input-field col s12m m4">
              <input
                placeholder=""
                id="router-input"
                type="text"
                name="router"
                // className="autocomplete"
                value={this.state.router}
                onChange={this.handleInputChange}
              />
              <label htmlFor="router">Router</label>
            </div>

            <div className="input-field col s12 m3">
              <input
                placeholder=" "
                id="mirror-sap"
                type="text"
                name="sap"
                //className="validate"
                value={this.state.sap}
                onChange={this.handleInputChange}
              />
              <label htmlFor="sap">Sap or IP-Filter</label>
            </div>

            <div className="input col s12 m3">
              <label className="dateTimeLabel" htmlFor="expiration">
                Expiration
              </label>
              <DateTime
                onChange={moment =>
                  this.handleDateTimePicker(moment, "expiration")
                }
                value={this.state.expiration}
                isValidDate={this.valid}
                inputProps={{ readOnly: false }}
              />
            </div>

            <button
              type="submit"
              className="btn-floating  scale-transition btn"
            >
            {/* btn-large */}
              <i className="material-icons">add</i>
            </button>
          </div>
        </form>
       
        {/* <h3 className="title">Current Mirror(s)</h3> */}
        <div>
          <h3 className="title">Current Mirror(s)</h3>
          {this.state.mirrorArr.length ? (
            <Tables
              mirrorArr={this.state.mirrorArr}
              deleteMirror={this.deleteMirror}
            />
          ) : (
            <h3>No Current Mirrors</h3>
          )}
        </div>
      </div>
    );
  }
}

export default Mirror;
