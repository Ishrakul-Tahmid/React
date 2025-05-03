import './Country.css';
const Country = ({ country }) => {
    const { name, flags, population, region, capital } = country;
    return (
        <div className="country">
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="National Falg" />
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;