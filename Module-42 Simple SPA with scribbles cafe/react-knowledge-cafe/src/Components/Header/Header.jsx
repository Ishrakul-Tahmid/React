import React from 'react';
import wom from '../../assets/images/wom.png'; // Assuming the image is in the assets folder

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img style={{ width: '50px', height: '50px' }} src={wom} alt="Header" />
        </header>
    );
};

export default Header;
