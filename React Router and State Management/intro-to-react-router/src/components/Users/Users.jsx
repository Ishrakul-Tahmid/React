import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'; // Assuming you have a CSS file for styling

const Users = () => {

    const users = useLoaderData();

    return (
        <div>
            <h2>Our users: {users.length}</h2>
            <p>Elite users</p>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;