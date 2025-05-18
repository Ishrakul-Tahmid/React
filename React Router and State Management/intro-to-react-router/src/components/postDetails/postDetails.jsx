import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    // const params = useParams();
    const { postId } = useParams();
    console.log(postId);
    const { id, title, body } = post;
    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '10px',
    }

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div style={userStyle}>
            <h2>Post {id}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;