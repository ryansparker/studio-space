import React from 'react'
import Nav from '../Nav'
import './style.css'


function Login() {

return(


    <div>
        {/* <Nav /> */}
        <div className="login">
      
       
            <div className="login-left">

            <div className="login-logo">
            
                <img src='/logo.svg' /> 
            
                <h1>studio space</h1>
          
               
            </div>
               
            </div>
            <div className="login-right">
                <div className="login-signin">
                        <h2>Sign In</h2>
                        <div className="btn">
                            <a href='http://localhost:8080/auth/google'>Log in with Google</a>
                        </div>
                        <div className="btn">
                            <a href="http://localhost:8080/auth/facebook">Log in with Facebook</a>
                        </div>
                </div>
                <div className="login-footer">                        
                            © studio space 2020
                </div>
            </div>
        </div>
    </div>


)

}

export default Login