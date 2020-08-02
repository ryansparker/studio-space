import React, { useState } from 'react'
import './style.css'
import Dropdown from '../Dropdown'
import { amenities, equipment } from '../../util/constants'
import {urlServer} from '../../util/constants'


function Search(props) {

 const [city, setCity] = useState("")
 const [selectedAmenities, setAmenities] = useState([])
 const [selectedEquipment, setEquipment] = useState([])

console.log(selectedAmenities, selectedEquipment)

    function handleClick() {
        // fetch(`${url}/spaces`, {
        //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //     mode: 'cors', // no-cors, *cors, same-origin
        //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: 'same-origin', // include, *same-origin, omit
        //     headers: {
        //       'Content-Type': 'application/json'
        //       // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     redirect: 'follow', // manual, *follow, error
        //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //     body: JSON.stringify({id: props.id}) // body data type must match "Content-Type" header
        
        //   });
    }
    function handleChange(event) {
        setCity(event.target.value)
        sendQuery()
    }

    function sendQuery() {
        const query = {
            city, 
            amenities: Object.values(selectedAmenities).join(), 
            equipment: Object.values(selectedEquipment).join()
        }
        console.log(`Look here!`, Object.values(selectedAmenities))
        const queryString = Object.entries(query).map(([key, value]) => {
            return `${key}=${value}`
        }).join("&")

        console.log(query, queryString)
        fetch (`${urlServer}/spaces?${query}`)
        .then(response => response.json())
        .then((data) => {
            props.setSpaces(data)
            console.log(data)
        })
    }

    return (

        <div className="search">
            
            <div className="search-contents">
                <h2>Search for a Space</h2>
                <form className="search-form">
                    <div>
                        <label for='from'>City</label>
                        <input type="text" placeholder="Where?" value={city} onChange={handleChange}/>
                    </div>


      
            <Dropdown question= "What's there?" label= "Amenities" items = { amenities } setState = {setAmenities}/>
            <Dropdown question= "What's there?" label= "Equipment" items = { equipment } setState = {setEquipment}/>

                    <input type="submit" value="Search" onClick={ handleClick }/>
                </form>

            </div>
           

        </div>
    )
}

export default Search