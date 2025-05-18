import React from 'react';

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '10px',
    }
    return (
        <div style={userStyle}>
            <h2>User ID: {id}</h2>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default User;