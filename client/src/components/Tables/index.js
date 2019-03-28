import React from "react";
import moment from "moment";
import "./style.css";

function Tables(props) {
  return (
    <div className="row">
      <table className="highlight responsive-table hoverable">
        <thead>
          <tr>
            <th>Router</th>
            <th>Sap/IP Filter</th>
            <th>Created on</th>
            <th>Expiration</th>
            <th>Time Left</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {props.mirrorArr.map(mirror => {
            // console.log(mirror);
            return (
                <tr key={mirror._id}>
                  <td>{mirror.router}</td>
                  <td>{mirror.sap}</td>
                  <td>
                    {moment(mirror.createdOn).format("MMM Do YY h:mm:ss a")}
                  </td>
                  <td>
                    {moment(mirror.expiration).format("MMM Do YY h:mm:ss a")}{" "}
                  </td>
                  <td>{moment(mirror.expiration).fromNow()}</td>
                  <td>
                    <button
                      className="btn-floating  waves-light right grey"
                      onClick={() => props.deleteMirror(mirror._id)}
                      type="submit"
                      name="action"
                    >
                      <i className="material-icons ">delete</i>
                    </button>
                  </td>
                </tr>
              
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Tables;

//btn-large
//waves-effect
