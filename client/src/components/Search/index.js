import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import './style.css'
import Amenities from '../Amenities'
import Equipment from '../Equipment'
import { amenities, equipment } from '../../util/constants'


function Search() {

    const amenitiesComponent = amenities.map(function (amenity) {
        return (
            <Amenities {...amenity} />
        )
    })

    const equipmentComponent = equipment.map(function (equip) {
        return (
            <Equipment {...equip}/>
        )
    })

    return (
        <div className="search">
            
            



            <div className="search-contents">
                <h2>Search for a Space</h2>
                <form className="search-form">
                    <div>
                        <label for='from'>City</label>
                        <input type="search" placeholder="Where?" />
                    </div>
                    <div>
                        <label for='from'>Amenities</label>
                        <input type="search" placeholder="What's it like?" />
                        <div className="amenities">
                        {amenitiesComponent}
                        </div>
                    </div>
                    <div>
                        <label for='from'>Equipment</label>
                        <input type="search" placeholder="What's there?" />
                        <div className="equipment">
                        {equipmentComponent}
                        </div>
                    </div>
                    <input type="submit" value="Search" />
                </form>

            </div>


        </div>
    )
}

export default Search