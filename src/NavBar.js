import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
function NavBar() {
    return (
        <div>
            <ul className='navbar'>
                <li><NavLink className='nav-bar-link' to='/'>All Students</NavLink></li>
                <li><NavLink className='nav-bar-link' to='/insert'>Add Student</NavLink></li>
                <li><NavLink className='nav-bar-link' to='/update'>Edit Student</NavLink></li>
                {/* <li><NavLink className='nav-bar-link' to='/delete'>Delete Student</NavLink></li> */}
            </ul>
        </div>
    );
}
export default NavBar;