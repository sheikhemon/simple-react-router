import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    return (
        <div>
            <h2>Friend Detail: {friendId}</h2>
            <h1>{friend.name}</h1>
            <h2>{friend.phone}</h2>
            <h3>{friend.website}</h3>
            <p>{friend.company?.name}</p>
        </div>
    );
};

export default FriendDetail;