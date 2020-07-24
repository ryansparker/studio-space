import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import './style.css'

function Search() {

    return(
        <div className="search">

        <Nav />
            <div className="search-contents">
                <h2>Search for a Space</h2>
                <form className="search-form">
                    <input type="search" placeholder="What city?" />
                    
                    <label for='from'>From</label>
                    <input type='date' name='from' />

                    <label for='from'>To</label>
                    <input type='date' name='to' />

                    <input type="submit" value="Search"/>
                </form>
            </div>
          <Footer />
      </div>
    )
}

export default Search