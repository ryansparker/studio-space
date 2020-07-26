import React from 'react'
import NavWithPost from '../NavWithPost'
import Footer from '../Footer'
import Post from '../Post'
import Search from '../Search'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './style.css'

function Dashboard() {
    return (
        
        <div className="dashboard">
      
       
      <NavWithPost />

        {/* <div className="dashboard-contents"> */}
            <Search />
        {/* <div className="dashboard-tag">
           <h3>We connect artists with short-term studio solutions to produce and present their work.</h3>
        </div>
       

            <div className="dashboard-options">
                    <h2>Hello, Name</h2>
                   
                        <a href='http://localhost:3000/search' className="btn">
                            <span>Find a Space</span>
                        </a>
                        <a href="http://localhost:3000/post" className="btn">
                            <span>Post a Space</span>
                        </a>
            </div>
            </div> */}
        <Footer />
    </div>
        
    )
}

export default Dashboard