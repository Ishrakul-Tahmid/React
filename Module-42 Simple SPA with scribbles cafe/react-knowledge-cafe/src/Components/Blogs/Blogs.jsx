import React, { useEffect, useState } from 'react';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

        useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())// Fetch blogs from API
            .then(data => setBlogs(data))// Convert response to JSON
    }, [])//here dependency array is empty as we will load only once when the component mounts

    return (
        <div className='md: w-2/3'>
            <h2 className='text-4xl'>Blogs: {blogs.length}</h2>
        </div>
    );

};

export default Blogs;