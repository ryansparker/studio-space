import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import './style.css'
import {urlServer} from '../../util/constants'

function Post() {

    return (
        <div className="post">

            <Nav />
            <form className="post-contents" action={`${urlServer}/spaces`} method='POST'>
                <h2>Hi, Name. Tell us about your space.</h2>
                
                <label for="roomType">Room Type</label>
                <select name='roomType'>
                    <option value="private">Private</option>
                    <option value="semiPrivate">Semi-Private</option>
                    <option value="shared">Shared Space</option>
                </select>

                <label for="propertyType">Property Type</label>
                <select name="propertyType">
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="warehouse">Warehouse</option>
                    <option value="commercial">Commercial</option>
                </select>

                <label for="squareFootage">Square Footage</label>
                <select name="squareFootage">
                    <option value="50">0-50</option>
                    <option value="100">51-100</option>
                    <option value="200">101-200</option>
                    <option value="400">201-400</option>
                    <option value="500">401-500</option>
                </select>

                <h2>Where is your space?</h2>
                <label for="street">Street Address</label>
                <input type="text" id="street" name="street" className="error-field" />
                {/* <p className="error">Sorry, this field is required.</p> */}

                <label for="apt">Apt/Suite (Optional)</label>
                <input type="text" id="apt" name="apt" className="error-field" />
                {/* <p className="error">Sorry, this field is required.</p> */}

                <label for="city">City</label>
                <input type="text" id="city" name="city" className="error-field" />
                {/* <p className="error">Sorry, this field is required.</p> */}

                <div className="state-zip">
                    <div>
                        <label for="state">State</label>
                        <input type="text" id="state" name="state" className="error-field" />
                        {/* <p className="error">Sorry, this field is required.</p> */}
                    </div>
                    <div className="zip">
                        <label for="zip">Zipcode</label>
                        <input type="text" id="zip" name="zip" className="error-field" />
                        {/* <p className="error">Sorry, this field is required.</p> */}
                    </div>
                </div>

                <h2>What amenities do you offer?</h2>
                <div className="checkbox">
                    <input type="checkbox" name="wifi" id="wifi" />
                    <label for="wifi" id="checkbox">
                        WIFI
                    </label><br />
                    <input type="checkbox" name="sink" id="sink" />
                    <label for="sink" id="checkbox">
                        Sink
                    </label><br />
                    <input type="checkbox" name="seating" id="seating" />
                    <label for="seating" id="checkbox">
                        Seating
                    </label><br />
                    <input type="checkbox" name="tables" id="tables" />
                    <label for="tables" id="checkbox">
                        Tables
                    </label><br />
                    <input type="checkbox" name="storage" id="storage" />
                    <label for="storage" id="checkbox">
                        Storage
                    </label><br />
                    <input type="checkbox" name="crashpad" id="crashpad" />
                    <label for="crashpad" id="checkbox">
                        Crashpad
                    </label><br />
                    <input type="checkbox" name="kitchen" id="kitchen" />
                    <label for="kitchen" id="checkbox">
                        Kitchen Comforts
                    </label>
                </div>

                <h2>What equipment do you offer?</h2>
                <div className="checkbox">
                    <input type="checkbox" name="easel" id="easel" />
                    <label for="easel" id="checkbox">
                        Easel
                    </label><br />
                    <input type="checkbox" name="palette" id="palette" />
                    <label for="palette" id="checkbox">
                        Glass Palette
                    </label><br />
                    <input type="checkbox" name="paperCutter" id="paperCutter" />
                    <label for="paperCutter" id="checkbox">
                        Paper Cutter
                    </label><br />
                    <input type="checkbox" name="press" id="press" />
                    <label for="press" id="checkbox">
                        Printmaking Press
                    </label><br />
                    <input type="checkbox" name="loom" id="loom" />
                    <label for="loom" id="checkbox">
                        Loom
                    </label><br />
                    <input type="checkbox" name="sprayBooth" id="sprayBooth" />
                    <label for="sprayBooth" id="checkbox">
                        Spray Booth
                    </label><br />
                    <input type="checkbox" name="woodshop" id="woodshop" />
                    <label for="woodshop" id="checkbox">
                        Woodshop Equipment
                    </label><br />
                    <input type="checkbox" name="welding" id="welding" />
                    <label for="welding" id="checkbox">
                        Welding Equipment
                    </label>

                    <h2>What other information would you like to add?</h2>
                    <textarea for="info" name='info'></textarea>


                    <button class="cta" type='submit'>Post Space</button>
                </div>
            </form>



            <Footer />
        </div>
    )
}

export default Post