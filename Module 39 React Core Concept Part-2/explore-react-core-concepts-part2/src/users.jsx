import { useEffect, useState  } from "react";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => { 
        fetch('https://jsonplaceholder.typicode.com/users') // Fetching data from the API
            .then(res => res.json()) // Parsing the response as JSON
            .then(data => setUsers(data)) // Logging the data to the console
    }, []);
    // This effect runs only once when the component mounts

    return (
        <div>
            <h3>Users: {users.length}</h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
            {/* Displaying the list of users */}
        </div>
    )
}

/*
* 1. **useState**: This is a React hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update it. In this case, `users` is the state variable, and `setUsers` is the function to update it.
* 2. **useEffect**: This is another React hook that allows you to perform side effects in your components. It takes a function as its first argument, which will be executed after the component mounts or updates. The second argument is an array of dependencies that determine when the effect should run. If the array is empty, the effect runs only once when the component mounts.
*3. use fetch to load data from an API. The `fetch` function is used to make network requests. In this case, it fetches data from the JSONPlaceholder API, which is a fake online REST API for testing and prototyping.

*/