import './Bottle.css'; // Assuming you have a CSS file for styling

const Bottle = ({ bottle }) => {
    const { name, img, price } = bottle;
    return (
        <div className='bottle'>
            <h3>Bottle: {name}</h3>
            <img src={img} alt="Bottle Image" />
            <p>Price: {price}</p>
        </div>
    );
};

export default Bottle;