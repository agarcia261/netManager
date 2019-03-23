import React, { Component } from "react";
import axios from "axios";
import Maintable from "../../../components/Maintable";
import "./style.css";

class Main extends Component {
  // Setting the initial values for main page information
  state = {
    customerName: "",
    customerSearch: "",
    customerArr: []
  };

  //get all customers
  // getCustomers = () => {
  //   axios
  //     .get("/api/main")
  //     .then(res => this.setState({ 
  //       customerArr: res.data.routers
  //     }))
  //     // console(this.state.customerArr)
  //     .catch(err => console.log(err));
  // };

  // componentDidMount() {
  //   this.getCustomers();
  // }

  // componentDidUpdate() {
  //   this.getCustomers();
  // }

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

  // User submit search to get customer name
  handleFormSubmit = event => {
    event.preventDefault();
    // console.log(this.state.customerSearch)
    const search = {
      customerSearch: this.state.customerSearch
    };
     console.log(search);
    return axios
      .post("/api/main", search)
      .then(res =>{
        console.log(res)

      if (res.data.hasData){}
        this.setState({
          customerArr: res.data.routers,
          customerName:res.data.customerName
        })
      })

      // .post("/api/main", search)
      // .then(res =>
      //   this.setState({
      //     customerSearch: res.data.routers,
      //     customerName:res.data.customerName
      //   })
      // )
      .catch(err => console.log(err))
      .then(
        this.setState({
          customerSearch: ""
        })
      );
  };

  //render form and existing miror information
  render() {
    return (
      <div className="row content-container">
       
        <h3 className="title">Search for Customer</h3>
        <form
          className="col s12 form-class"
          id="add-customer"
          onSubmit={this.handleFormSubmit}
        >
          <div className="row">
            <div className="input-field col s12m m4">
              <input
                placeholder=""
                id="customer-name"
                type="text"
                name="customerSearch"
                className="autocomplete"
                value={this.state.customerSearch}
                onChange={this.handleInputChange}
              />
              <label htmlFor="customerName">Customer Name</label>
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
          {this.state.customerArr.length ? (
            <Maintable customerArr={this.state.customerArr} />
          ) : (
            <h3> </h3>
          )}
        </div>
      </div>
    );
  }
}

export default Main;
