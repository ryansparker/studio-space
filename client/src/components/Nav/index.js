import React from 'react'
import {urlServer} from '../../util/constants'
import "./style.css"



function Nav() {

    return (

        <div>
     
                <div className="login-logo">
                <a href={`${urlServer}/dashboard`}>
                
                    <h1>studio space</h1></a>
                   
                
                </div>
           


                   
        </div>
    )
}

export default Nav