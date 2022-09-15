import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <div className='logo'>
    <Link to="/">GoalSetter</Link>
        </div>
        <ul>
            <li>
            <Link to="/Login">Login</Link>
            <FaSignInAlt/>
            </li>
            <li>
            <Link to="/Register">Register</Link>
            <FaUser/>
            </li>
        </ul>
    </div>
  )
}

export default Header