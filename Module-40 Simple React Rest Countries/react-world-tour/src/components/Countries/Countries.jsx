import { useEffect, useState } from "react";
import Country from "../Country/Country";


const Countries = () => {
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => setCountries(data))
            .catch((error) => console.error("Error fetching countries:", error));
    }, [])
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {
                countries.map(country => <Country key={country.car.cca3}
                country={country}></Country>)
            }
        </div>
    );
};

export default Countries;