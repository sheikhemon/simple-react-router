import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className="nav">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Friends">Friends</NavLink>
        </nav>
    );
};

export default Header;