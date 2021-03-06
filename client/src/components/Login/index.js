import React from 'react'
import Nav from '../Nav'
import {urlServer} from '../../util/constants'
import './style.css'


function Login() {

return(


    
        
        <div className="login">
      
       
            <div className="login-left">

          <Nav />
               
            </div>
            <div className="login-right">
                <div className="login-signin">
                        <h2>Sign In</h2>
                       
                            <a href={`${urlServer}/auth/google`} className="btn">
                                <span>Log in with Google</span>
                            </a>
                        
                            
                            <a href={`${urlServer}/auth/facebook`} className="btn">
                                <span>Log in with Facebook</span>
                            </a>
                       
                </div>
                <div className="login-footer">                        
                            © studio space 2020
                </div>
            </div>
        </div>
    


)

}

export default Login