import React from 'react'
import './styles/More.css'
import Add from '../images/add.png'
import { Link } from 'react-router-dom'

const More = () => {
    return(
        <Link to="/exercise/new">
            <img src={Add} className="mt-5 mb-5 img" alt="exercise"/>
        </Link>
    )
}

export default More