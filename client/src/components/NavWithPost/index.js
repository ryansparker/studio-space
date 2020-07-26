import React from 'react'
import "./style.css"



function NavWithPost() {

    return (

        <div>
     
                <div className="login-logo">
                <a href="http://localhost:3000/dashboard">
                
                  <img src='/logo.svg' />  </a>
                    <h1>studio space</h1>
                   
                    <div className="post-btn">
                
                    <a href="http://localhost:3000/post">
                        <h2>Post</h2></a>
                </div>
                </div>
           


                   
        </div>
    )
}

export default NavWithPost