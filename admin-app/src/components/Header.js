import React from 'react'
import { Link } from 'react-router-dom'

/**
* @author
* @function Header
**/

export const Header = (props) => {
    return (
        <div className='header-container'>
            <div><Link to={"/"} className='text-link'>home</Link></div>
            <div> <Link to={"/signin"} className="text-link">Signin</Link>  </div>
            <div> <Link to={"/signup"} className="text-link">signup</Link></div>
        </div>
    )

}