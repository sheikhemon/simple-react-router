import React from 'react';
import { Link } from 'react-router-dom';
import './friend.css'

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend
    const friendStyle = {
        border: '1px solid red',
        padding: '10px',
        margin: '10px'
    }
    const url = `/friend/${id}`;
    return (
        <div className="single-friend" style={friendStyle}>
            <h2>My name: {name} {id}</h2>
            <h4>My Phone: {phone}</h4>
            <p>Visit My Website: {website}</p>
            <p>Address: {address.city}</p>
            <Link to={url}>Visit Me</Link>
        </div>
    );
};

export default Friend;