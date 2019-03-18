import React, { Component } from "react";
import axios from "axios";
import DateTime from "react-datetime";
import Tables from "../../../components/Tables";
import "./style.css";

class Main extends Component {
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

  //render form and existing miror information
  render() {
    return (
      <div class="row">
      <div class="col s8 m8 offset-s5 offset-m5">
          <p><i class="material-icons ">zoom_out</i><strong> IPX ACCESS 353001 </strong><i class="material-icons ">zoom_in</i></p>
      </div>
  </div>
      
      
      
    ); //end of return
  }//end of render
}//end of extend componenent

export default Main;
