import React from "react";
import moment from 'moment'

function Card (props){
    return (
    <div className="col s12 m12" key={props.mirror._id}>
            <h5 className="header">Router: {props.mirror.router}</h5 >
            <div className="card horizontal">
                
            <div className="card-stacked">
                <div className="card-content">
                    <p>Sap: {props.mirror.sap}  Created on: {props.mirror.createdOn} Expirstion:{moment(props.mirror.expiration).format('LLLL')} TimeLeft: {moment(props.mirror.expiration).fromNow()} </p>

                    {/* <p>Sap: {mirrorArr.sap}  Created on: {mirrorArr.createdOn} Expiration: {mirrorArr.expiration} </p> */}

                    <button className="btn-floating btn-large waves-effect waves-light red right" 
                        onClick={() => props.deleteMirror(props.mirror._id)} type="submit" name="action">X
                        {/* <i className="material-icons right">add_circle</i> */}
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Card;
