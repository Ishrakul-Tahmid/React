import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css'; // Assuming you have a CSS file for styling


const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>Posts: {posts.length}</h2>
            <div className="posts">
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;