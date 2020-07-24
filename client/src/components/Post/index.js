import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import './style.css'

function Post() {

    return(
        <div className="post">

        <Nav />
            <div className="post-contents">
                <h2>Hi, Name. Tell us about your space.</h2>
                    <label for="room-type">Room Type</label>
                    <select id="room-type">
                        <option value="private">Private</option>
                        <option value="semi-private">Semi-Private</option>
                        <option value="shared">Shared Space</option>
                    </select>

                    <label for="property-type">Property Type</label>
                    <select id="property-type">
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="warehouse">Warehouse</option>
                        <option value="commercial">Commercial</option>
                    </select>

                    <label for="fname">Square Footage</label>
                    <select id="property-type">
                        <option value="50">0-50</option>
                        <option value="100">51-100</option>
                        <option value="200">101-200</option>
                        <option value="400">201-400</option>
                        <option value="500">401-500</option>
                    </select>

                    <h2>Where is your space?</h2>
                    <label for="street">Street Address</label>
                    <input type="text" id="street" name="street" className="error-field" />
                    <p className="error">Sorry, this field is required.</p>

                    <label for="apt">Apt/Suite (Optional)</label>
                    <input type="text" id="apt" name="pat" className="error-field" />
                    <p className="error">Sorry, this field is required.</p>

                    <label for="city">City</label>
                    <input type="text" id="city" name="city" className="error-field" />
                    <p className="error">Sorry, this field is required.</p>

                    <div className="state-zip">
                        <div>
                        <label for="state">State</label>
                        <input type="text" id="state" name="state" className="error-field" />
                        <p className="error">Sorry, this field is required.</p>
                        </div>
                        <div>
                        <label for="zip">Zipcode</label>
                        <input type="text" id="zip" name="zip" className="error-field" />
                        <p className="error">Sorry, this field is required.</p>
                        </div>
                    </div>

                    <h2>What amenities do you offer?</h2>
                   
                   <div className="checkbox">
                    <input type="checkbox" name="cb" id="cb" />
                    <label for="cb" id="checkbox">
                        WIFI
                    </label><br />
                    <input type="checkbox" name="cb" id="cb" />
                    <label for="cb" id="checkbox">
                        Sink
                    </label><br />
                    <input type="checkbox" name="cb" id="cb" />
                    <label for="cb" id="checkbox">
                        Seating
                    </label><br />
                    <input type="checkbox" name="cb" id="cb" />
                    <label for="cb" id="checkbox">
                        Tables
                    </label><br />
                    <input type="checkbox" name="cb" id="cb" />
                    <label for="cb" id="checkbox">
                        Storage
                    </label><br />
                    <input type="checkbox" name="cb" id="cb" />
                    <label for="cb" id="checkbox">
                        Crashpad
                    </label><br />
                    <input type="checkbox" name="cb" id="cb" />
                    <label for="cb" id="checkbox">
                        Kitchen Comforts
                    </label>
                    </div>
                    
                    <h2>What equipment do you offer?</h2>
                    <div className="checkbox">
                    <input type="checkbox" name="cb" id="cb" />
                    <label for="cb" id="checkbox">
                    Easel 
                    </label><br />
                    <input type="checkbox" name="cb" id="cb" />
                    <label for="cb" id="checkbox">
                    Glass Palette
                    </label><br />
                    <input type="checkbox" name="cb" id="cb" />
                    <label for="cb" id="checkbox">
                        Paper Cutter
                    </label><br />
                    <input type="checkbox" name="cb" id="cb" />
                    <label for="cb" id="checkbox">
                    Printmaking Press
                    </label><br />
                    <input type="checkbox" name="cb" id="cb" />
                    <label for="cb" id="checkbox">
                    Loom 
                    </label><br />
                    <input type="checkbox" name="cb" id="cb" />
                    <label for="cb" id="checkbox">
                        Spray Booth
                    </label><br />
                    <input type="checkbox" name="cb" id="cb" />
                    <label for="cb" id="checkbox">
                        Woodshop Equipment                   
                    </label><br />
                    <input type="checkbox" name="cb" id="cb" />
                    <label for="cb" id="checkbox">
                        Welding Equipment                   
                    </label>
                    <a href="step2.html" class="cta">Next</a>
                    </div>
                    </div>


  
          <Footer />
      </div>
    )
}

export default Post