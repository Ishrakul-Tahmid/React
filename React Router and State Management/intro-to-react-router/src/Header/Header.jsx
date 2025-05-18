
import './Header.css'; // Assuming you have a CSS file for styling
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Header</h2>
            <nav className='p-4'>
                <span>My website</span>
                <Link to="/">Home</Link>
                <NavLink to="/users">
                    Users
                </NavLink>
                {/* <Link to="/users">Users</Link> */}
                <NavLink to="/posts">
                    Posts
                </NavLink>
                {/* <Link to="/posts">Posts</Link> */}
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;