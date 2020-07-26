import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import './style.css'

const amenities = ["WIFI", "Sink", "Seating", "Tables", "Storage", "Crashpad", "Kitchen Comforts"]
const equipment = ["Easel", "Glass Palette", "Paper Cutter", "Printmaking Press", "Loom", "Spray Booth", "Woodshop Supplies", "Welding Supplies"]

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
                    <div>
                        <label for='from'>Amenities</label>
                        <input type="search" placeholder="What's it like?" />

                        <div className="amenities">
                            <input type="checkbox" name="wifi" id="wifi" />
                            <label for="wifi" id="checkbox">
                                WIFI
                    </label>
                            <input type="checkbox" name="sink" id="sink" />
                            <label for="sink" id="checkbox">
                                Sink
                    </label>
                            <input type="checkbox" name="seating" id="seating" />
                            <label for="seating" id="checkbox">
                                Seating
                    </label>
                            <input type="checkbox" name="tables" id="tables" />
                            <label for="tables" id="checkbox">
                                Tables
                    </label>
                            <input type="checkbox" name="storage" id="storage" />
                            <label for="storage" id="checkbox">
                                Storage
                    </label>
                            <input type="checkbox" name="crashpad" id="crashpad" />
                            <label for="crashpad" id="checkbox">
                                Crashpad
                    </label>
                            <input type="checkbox" name="kitchen" id="kitchen" />
                            <label for="kitchen" id="checkbox">
                                Kitchen Comforts
                    </label>
                        </div>
                    </div>
                    <div>
                        <label for='from'>Equipment</label>
                        <input type="search" placeholder="What's there?" />

                        <div className="equipment">
                            <input type="checkbox" name="easel" id="easel" />
                            <label for="easel" id="checkbox">
                                Easel
                    </label>
                            <input type="checkbox" name="palette" id="palette" />
                            <label for="palette" id="checkbox">
                                Glass Palette
                    </label>
                            <input type="checkbox" name="paperCutter" id="paperCutter" />
                            <label for="paperCutter" id="checkbox">
                                Paper Cutter
                    </label>
                            <input type="checkbox" name="press" id="press" />
                            <label for="press" id="checkbox">
                                Printmaking Press
                    </label>
                            <input type="checkbox" name="loom" id="loom" />
                            <label for="loom" id="checkbox">
                                Loom
                    </label>
                            <input type="checkbox" name="sprayBooth" id="sprayBooth" />
                            <label for="sprayBooth" id="checkbox">
                                Spray Booth
                    </label>
                            <input type="checkbox" name="woodshop" id="woodshop" />
                            <label for="woodshop" id="checkbox">
                                Woodshop Equipment
                    </label>
                            <input type="checkbox" name="welding" id="welding" />
                            <label for="welding" id="checkbox">
                                Welding Equipment
                    </label>
                        </div>
                    </div>
                    <input type="submit" value="Search" />
                </form>

            </div>


        </div>
    )
}

export default Search