import React from 'react'



function React(){
    return(

        <header className={`flex-nav ${highlighted ? "highlighted" : ""}`} >
        <a href="#" onClick={ toggleMenu } className="toggleNav">☰</a>
        <ul className={`menuList ${menuToggled ? "toggled" : ""}`} >
        <li className="home"><a href="#box-home" >ryan parker</a></li>
        <li className="spacer" />
        <li><a href="#about-box" >about</a></li>
        <li><a href="#project-box" >projects</a></li>
        <li><a href="#contact-box" >contact</a></li>
        </ul>
        </header>

    )
}