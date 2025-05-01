import { useEffect, useState } from 'react';
import './friends.css';
import Friend from './Friend';

export default function Friends() {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') // Fetching data from the API
            .then(res => res.json()) // Parsing the response as JSON
            .then(data => setFriends(data)) // Logging the data to the console
    }
    , []);

    return (
        <div className="box">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}

/*
*1. state to hold data
*2. use effect with dependency array
*3. fetch to load data from an API
*4. set loaded data to state
*/