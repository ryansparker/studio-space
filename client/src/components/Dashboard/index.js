import React, {useState, useEffect} from 'react'
import NavWithPost from '../NavWithPost'
import Footer from '../Footer'
import Post from '../Post'
import Search from '../Search'
import SpacesList from '../SpacesList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {urlServer} from '../../util/constants'
import './style.css'

function Dashboard() {

    const [spaces, setSpaces] = useState([])
    useEffect(async() => {
        const results = await fetch(`${urlServer}/spaces`).then((results)=> results.json())
        console.log(results)
        setSpaces(results)
    }, [])


    return (

        <div className="dashboard">
            <NavWithPost />
            <Search />
            <SpacesList spaces ={ spaces }/>
            <Footer />
        </div>

    )
}

export default Dashboard