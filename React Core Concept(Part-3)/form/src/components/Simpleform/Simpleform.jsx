import React from 'react';

const Simpleform = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log('Form submitted');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name'></input>
                <br></br>
                <input type="email" name="email" id="" />
                <br></br>
                <input type="password" name="password" id="" />
                <br></br>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Simpleform;