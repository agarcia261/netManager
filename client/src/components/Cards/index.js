import React from "react";
import Card from "../Card";

function Cards (props){
    return (
        <div className="row">
             <h3>Current Mirrors</h3> 

        {props.mirrorArr.map(mirror => {
           
          return (
           <Card mirror={mirror} deleteMirror={props.deleteMirror}/>
          )
        })}
        </div>
    )}
export default Cards

