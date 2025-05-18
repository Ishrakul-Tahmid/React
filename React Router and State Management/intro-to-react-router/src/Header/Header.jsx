import React from 'react';
import './Header.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Header</h2>
            <nav className='p-4'>
                <span>My website</span>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;