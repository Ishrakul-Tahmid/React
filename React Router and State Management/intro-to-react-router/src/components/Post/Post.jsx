import { Link } from "react-router-dom";


const Post = ({ post }) => {
    const { title, body, id } = post;
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
            <Link to={`/post/${id}`}>
                <button>Show Details</button>   
            </Link>
        </div>
    );
};

export default Post;