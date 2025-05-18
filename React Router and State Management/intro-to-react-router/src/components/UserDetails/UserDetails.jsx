import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const { id, name, email, phone, website } = user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '10px',
    }
    return (
        <div style={userStyle}>
            <h2>Details about users</h2>
            <h2>User ID: {id}</h2>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Elite user</p>
        </div>
    );
};

export default UserDetails;