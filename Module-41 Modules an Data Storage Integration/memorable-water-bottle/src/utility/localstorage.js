const getStorageCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    } else {
        return [];
    }
}

const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLS = id => {
    const cart = getStorageCart();
    cart.push(id);
    // save to localStorage
    saveCartToLS(cart);
}

export { addToLS }