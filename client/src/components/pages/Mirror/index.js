import React, { Component } from "react";
import Cards from "../../../components/Cards";
import axios from "axios";
import DateTime from "react-datetime";
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
    console.log(event.target);

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    axios
      .get("/api/mirror")
      // .then(json => console.log(json.data[0]))
      .then(json => this.setState({ mirrorArr: json.data }))
      .catch(err => console.log(err));
    // console.log(mirrorArr)
  }

  deleteMirror = id => {
    axios
      .delete("/api/mirror/" + id)
      // .then(json => console.log(json.data[0]))
      .then(json => this.setState({ mirrorArr: json.data }))
      .catch(err => console.log(err));
  };

  // When the form is submitted, prevent the default event and alert the username and password
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

  render() {
    return (
      //render form and miror information
      <div className="row">
        <form
          className="col s12 form-class"
          id="add-mirror"
          onSubmit={this.handleFormSubmit}
        >
          <div className="row">
            <div className="input-field col s12m m3">
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
              />
            </div>

            <button
              type="submit"
              className="btn-floating btn-large scale-transition"
            >
              <i className="material-icons">add</i>
            </button>
          </div>
        </form>

        {this.state.mirrorArr.length ? (
          <Cards
            mirrorArr={this.state.mirrorArr}
            deleteMirror={this.deleteMirror}
          />
        ) : (
          <h3>No Current Mirrors</h3>
        )}

        {/* display current mirrors */}
        {/* {this.state.mirrorArr.length ? (
          <Cards mirrorArr={this.state.mirrorArr}/>
        ) : (
          <h3>No Current Mirrors</h3>
        )} */}
      </div>
    );
  }
}

// deleteMirror={this.removeMirror}
export default Mirror;
