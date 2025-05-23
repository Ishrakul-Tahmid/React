import { useEffect, useState } from "react"
import Post from "./Post"

export default function Posts() {

    const [posts, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}

/*
* 1.create a stste to store the data
* 2. Create a sue effect with no dependencies
* 3. use fetch to load data
*/