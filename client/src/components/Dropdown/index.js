import React, {useState} from 'react'
import './style.css'

function Dropdown(props) {
   
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(new Set());
   
        //when dropdown is clicked, dropdown items becomes visible
    function handleClick(e) {
        e.preventDefault();
        setVisible(!visible)
        console.log('The link was clicked.', visible);
    }
    
    const itemsList = props.items.map(function (item, idx) {
        function checkClick(e) {
            e.stopPropagation()
            const isSelected = selected.has(item.name)
            if(isSelected) {
                selected.delete(item.name)
            } else {
                selected.add(item.name)
            }
            setSelected(selected)
            props.setState(new Set(selected))
        }

        return (
            <div key={idx} onClick={checkClick}>
        <input type="checkbox" name={item.name} id={item.name} className="item"/>
        <label for={item.name} id="checkbox" >
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