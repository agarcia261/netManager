import React from "react";
import "./style.css";

function Maintable(props) {
  return (
    <div className="row content-container">
      {props.customerArr.map((customer, idx) => {
        console.log(customer);
        return (
          <React.Fragment>
            <h5 className="ipxName"> IPX ACCESS: {customer.ipxAccess}</h5>
            <div className="col s2">
              <img
                className="topology-img"
                src="/images/router.png"
                alt="router"
              />
              <h5 className="routName">{customer.routerName}</h5>
            </div>
            
            <div className="col s8">
              <table className="highlight responsive-table hoverable mainTable">
                <thead>
                  <tr>
                    <th>Sap</th>
                    <th>Codif/VPRN</th>
                    <th>BGP:R/ A/ S</th>
                    <th>Traffic IN/OUT</th>
                    <th>Mirror</th>
                    <th> </th>
                  </tr>
                </thead>
                
                <tbody>
                  <tr key={customer._id}>
                    <td>{customer.services[0].sap}</td>
                    <td>{customer.services[0].codification}</td>
                    <td>{customer.services[0].bgp.summary}</td>
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
          </React.Fragment>
        );
          
      })}
    </div>
  );
}

export default Maintable;
