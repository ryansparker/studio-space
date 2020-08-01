import React from 'react'
import ASpace from '../ASpace'
import './style.css'

function SpacesList(props) {
    return(
        <div>
        {props.spaces.map(spaces => {return <ASpace {...spaces} key = {spaces.id} />})}
     </div>
       
    )
}


export default SpacesList