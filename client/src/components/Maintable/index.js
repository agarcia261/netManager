import React from "react";
import "./style.css";

function Maintable(props) {
  return (
    <div className="row content-container">
      <div className="col s2">
        <img className="topology-img" src="/images/router.png" alt="router" />
      </div>
      <div className="col s7">
        <table className="highlight responsive-table hoverable">
          <thead>
            <tr>
              <th>Router Nanme</th>
              <th>Sap</th>
              <th>Codif / VPRN</th>
              <th>BGP: Rcv / Act / Sent</th>
              <th>Traffic IN</th>
              <th>Traffic OUT</th>
              <th>Mirror</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {props.customerArr.map((customer, idx) => {
              console.log(customer);
              return (
                <tr key={customer._id}>
                  <td>{customer.routerName}</td>
                  <td>{customer.services[0].sap}</td>
                  <td>{customer.services[0].codification}</td>
                  <td>{customer.services[0].bgpSummary}</td>
                  <td>{customer.services[0].avrTrafficIn}</td>
                  <td>{customer.services[0].avrTraffiOut}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="col s2">
        <img className="topology-img" src="/images/router.png" alt="router" />
      </div>
    </div>
  );
}

export default Maintable;

// .topology-img{
// 	max-width:180px;
// 	margin: auto;
// }
