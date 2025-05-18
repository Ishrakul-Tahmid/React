import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body } = post;
    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '10px',
    }
    return (
        <div style={userStyle}>
            <h2>Post {id}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;