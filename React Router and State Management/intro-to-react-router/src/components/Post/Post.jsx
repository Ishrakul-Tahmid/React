import { Link, useNavigate } from "react-router-dom";


const Post = ({ post }) => {
    const { title, body, id } = post;

    const navigaye = useNavigate();

    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '10px',
    }

    const handleShowDetails = () => {
        navigaye(`/post/${id}`);
    }

    return (
        <div style={userStyle}>
            <h2>Post {id}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>   
            </Link>
            <button onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};

export default Post;