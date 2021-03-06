import React from "react";
import moment from "moment";
import axios from "axios";
import "./style.css";

function Maintable(props) {
  // state = {
  //   router: "",
  //   sap: "",
  //   expiration: "",
  //   mirrorArr: []
  // };
  const handleFormSubmit = (router, sap) => {
    let now =new Date();
    let expiration = now.setHours(now.getHours()+4);
   
    // this will be posted within a route the function is not being called
    const data = {
      router: router,
      sap: sap,
      expiration: expiration
    };
    console.log(data);
     
      axios
        .post("/api/mirror", data)
        //create post request to post data so that addMirror has access to it
        .then(res => console.log(res))
        .catch(err => console.log(err))
    
  };
  return (
    <div className="row content-container">
      {props.customerArr.map((customer, idx) => {
        console.log(customer);
        return (
          <React.Fragment>
            <form>
            <h5 className="ipxName"> IPX ACCESS: {customer.ipxAccess}</h5>
            <div className="col s2">
              <img
                className="topology-img"
                src="/images/router.png"
                alt="router"
              />
              <h5 className="routName" >{customer.routerName}</h5>
            </div>
            
            <div className="col s8">
              <table className="highlight responsive-table mainTable">
                <thead>
                  <tr>
                    <th>Sap</th>
                    <th>Codif/VPRN</th>
                    <th>BGP: R/ A/ S</th>
                    <th>Traffic IN/OUT</th>
                    <th>Mirror</th>
                  </tr>
                </thead>
                
                  <tbody className="collapse hoverable">
                  
                  <tr key={customer._id}>
                    <td>{customer.services[0].sap}</td>
                    <td>{customer.services[0].codification}</td>
                    <td className={customer.services[0].bgp.bgpStatusCSS}>{customer.services[0].bgp.summary}</td>
                    <td>
                      {customer.services[0].avrTrafficIn}/
                      {customer.services[0].avrTraffiOut}
                    </td>
                    <td className="action-checkbox">
                      <input
                        className="action-select"
                        name="_selected_action"
                        id={idx}
                        type="checkbox"
                        onClick={()=>(handleFormSubmit(customer.routerName, customer.services[0].sap ))}
                      />
                      
                      <label htmlFor={idx}>&nbsp;</label>
                    </td>
                  </tr>
                 
                </tbody>

               
                
              </table>
            </div>
            <div className="col s2">
              <img
                className="topology-img"
                src="/images/router.png"
                alt="router"
              />
              <h5 className="custName">{props.customerName}</h5>
            </div> 
            <input type="hidden" value= {customer.routerName} name= "router"></input>
            </form>

          </React.Fragment>
        );
          
      })}
    </div>
  );
}

export default Maintable;

