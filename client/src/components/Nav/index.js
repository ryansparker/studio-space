import React from 'react'
import {urlServer} from '../../util/constants'
import "./style.css"



function Nav() {

    return (

        <div>
     
                <div className="login-logo">
                <a href={`${urlServer}/dashboard`}>
                
                  <img src='/logo.svg' />  </a>
                    <h1>studio space</h1>
                   
                
                </div>
           


                   
        </div>
    )
}

export default Nav