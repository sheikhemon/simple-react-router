import React from 'react';
import './friend.css'

const Friend = (props) => {
    const { name, phone, website, address } = props.friend
    const friendStyle = {
        border: '1px solid red',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div className="single-friend" style={friendStyle}>
            <h2>My name: {name}</h2>
            <h4>My Phone: {phone}</h4>
            <p>Visit My Website: {website}</p>
            <p>Address: {address.city}</p>
        </div>
    );
};

export default Friend;