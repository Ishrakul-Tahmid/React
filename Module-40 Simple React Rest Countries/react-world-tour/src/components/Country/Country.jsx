import './Country.css';
import { useState } from 'react';
const Country = ({ country }) => {
    const { name, flags, population, region, capital, cca3 } = country;

    const [visited, setVisited] = useState(true);
    const handleVisited = () => {
        setVisited(!visited); // Toggle the visited state
        // setVisited(true); // Always set visited to true
    };
    return (
        <div className="country">
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="National Falg" />
            <p>Population: {population}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>Going</button>
            {/* {visited && <p>I've visited this country</p>} */}
            {visited ? <p>I've visited this country</p> : <p>I want to visit this country</p>}
        </div>
    );
};

export default Country;