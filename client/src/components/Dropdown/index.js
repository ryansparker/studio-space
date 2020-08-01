import React, {useState} from 'react'
import './style.css'

function Dropdown(props) {
   
    const [visible, setVisible] = useState(false);

   
        //when dropdown is clicked, dropdown items becomes visible
        function handleClick(e) {
            e.preventDefault();
            setVisible(!visible)
            console.log('The link was clicked.');
          }
    

    const itemsList = props.items.map(function (item) {
        return (
            <div>
        <input type="checkbox" name={item.name} id={item.name} className="item"/>
        <label for={item.name} id="checkbox">
            {item.label}
        </label>
    </div>
        )
    })


    return (
        <div className="boop"  onClick={handleClick}>
        <label for='from'>{props.label}</label>
        <span tabIndex="-1">{props.question} </span>
        <div className="dropdown-items">
        <div className={`dropdown ${visible ? 'dropdown-visible' : ""}`}>
        {itemsList}
        </div>
        </div>
        
    </div>

   
    )
}

export default Dropdown