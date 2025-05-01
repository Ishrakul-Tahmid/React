const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    if (id && value) {
        localStorage.setItem(id, value); // it will add the id and value to the local storage
    }
    idInput.value = '';
    valueInput.value = '';
}