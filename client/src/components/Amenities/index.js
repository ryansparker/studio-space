import React from 'react'

function Amenities(props) {
    return (
    <div>
        <input type="checkbox" name={props.name} id={props.name} />
        <label for={props.name} id="checkbox">
            {props.label}
        </label>
    </div>
    )
}

export default Amenities