import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Oops!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.ststus === 404 && <div>
                    <h3>Page not found</h3>
                    <p>Sorry, the page you are looking for does not exist.</p>
                    <Link to="/">Go back to Home</Link> 
                </div>
                
            }
        </div>
    );
};

export default ErrorPage;