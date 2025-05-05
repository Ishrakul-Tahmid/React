import React from 'react';
import './Sunglass.css';
import Watch from '../Watch/Watch';
import { add, div as divide } from '../Utils/Calculator';
// import add from '../Utils/Calculator';

const Sunglass = () => {
    const num1 = 5;
    const num2 = 10;
    const sum = add(num1, num2);
    const vaag = divide(num1, num2);
    console.log('Vaag:', vaag);
    console.log('Sum:', sum);
    return (
        <div>
            <Watch></Watch>
            <h1>This is sunglass</h1>
        </div>
    );
};

export default Sunglass;