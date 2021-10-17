import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: 'Bold',
        color: 'red'
    }
    return (
        <nav className="nav">
            <NavLink activeStyle={activeStyle} to="/Home">Home</NavLink>
            <NavLink activeStyle={activeStyle} to="/Friends">Friends</NavLink>
            <NavLink activeStyle={activeStyle} to="/About">About</NavLink>
            <NavLink activeStyle={activeStyle} to="/About/Culture">Culture</NavLink>
        </nav>
    );
};

export default Header;