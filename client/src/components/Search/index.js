import React from 'react'
import './style.css'
import Dropdown from '../Dropdown'
import { amenities, equipment } from '../../util/constants'


function Search() {

    return (
        <div className="search">
            
            <div className="search-contents">
                <h2>Search for a Space</h2>
                <form className="search-form">
                    <div>
                        <label for='from'>City</label>
                        <input type="search" placeholder="Where?" />
                    </div>


      
            <Dropdown question= "What's there?" label= "Amenities" items = { amenities } />


            <Dropdown question= "What's there?" label= "Equipment" items = { equipment } />

                    <input type="submit" value="Search" />
                </form>

            </div>
           

        </div>
    )
}

export default Search