import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="container">
        <a href="">
        <h2>Brand</h2>
        </a>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/service">Service</NavLink>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Header