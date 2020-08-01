import React from 'react'
import './style.css'


function ASpace(props) {


    return(
        <div className="wrapper">
            <div className="space-wrapper">
            <div className="space-holder"></div>
        <div className="space-info">
        <p>Room Type:  {props.roomType}</p>
        <p>Property Type: {props.propertyType}</p>
        <p>Square Footage: {props.squareFootage}</p>
        <p>City: {props.city}</p>
        <button type="button" >visit</button>
        </div>
        </div>
        </div>
    )
    
}


export default ASpace

