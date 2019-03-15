import React from "react";
// Z
// import "./style.css";

function Cards (props){
    return (
        <div className="row">
             <h3>Current Mirrors</h3> 

        {props.mirrorArr.map(mirrorArr => {
            console.log(mirrorArr)
          return (
            <div className="col s12 m12" key={mirrorArr._id}>
                <h5 className="header">Router: {mirrorArr.router}</h5 >
                <div className="card horizontal">
                    
                <div className="card-stacked">
                    <div className="card-content">
                        <p>Sap: {mirrorArr.sap}  Created on: {mirrorArr.createdOn} Expiration: {mirrorArr.expiration} </p>
                        
                        
                    
                        <button className="btn-floating btn-large waves-effect waves-light red right" 
                            onClick={() => props.deleteMirror(mirrorArr._id)} type="submit" name="action">X
                            {/* <i className="material-icons right">add_circle</i> */}
                        </button>
                    </div>
                </div>
                </div>
          </div>
           
          )
        })}
        </div>
    )}
export default Cards

