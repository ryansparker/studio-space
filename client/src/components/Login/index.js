import React from 'react'
import './style.css'


function Login() {

return(

<div>
    <h1>Studio Space</h1>
    <div>
        <h2>Sign in</h2>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
        <div class="fb-login-button" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div>
    </div>
</div>

)

}

export default Login