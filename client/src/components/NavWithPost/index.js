import React from 'react'
import {urlServer} from '../../util/constants'
import "./style.css"



function NavWithPost() {

    return (

        <div>
     
                <div className="login-logo">
               
                  <a href={`${urlServer}/dashboard`}><h1>studio space</h1></a>
                   
                    <div className="post-btn">
                
                    <a href={`${urlServer}/post`}>
                        <h2>Post</h2></a>
                </div>
                </div>
           


                   
        </div>
    )
}

export default NavWithPost