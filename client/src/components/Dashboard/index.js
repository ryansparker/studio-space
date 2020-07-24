import React from 'react'
import Nav from '../Nav'
import Post from '../Post'
import Search from '../Search'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './style.css'

function Dashboard() {
    return (
        <Router>
        <div>
            <Nav />
            <Route path="/post" component={Post} />
            <Route path="/search" component={Search} />
        </div>
        </Router>
    )
}

export default Dashboard