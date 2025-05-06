import './Bottle.css'; // Assuming you have a CSS file for styling

const Bottle = ({ bottle, handleAddToCart }) => {
    const { name, img, price } = bottle;
    return (
        <div className='bottle'>
            <h3>Bottle: {name}</h3>
            <img src={img} alt="Bottle Image" />
            <p>Price: {price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;