const products = [
  { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
  { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
  { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
  { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
  { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const brands = products.map(product => product.brand);
console.log(brands); // ['lenovo', 'iphone', 'casio', 'ribon', 'canon'] ; it returns a new array with the brand names of the products

//without returns
products.forEach(product => console.log(product.name)); // it returns the name of the products one by one
// it does not return a new array, it just executes the function for each element in the array

//3. filter
const cheap = products.filter(product => product.price <= 5000); // it returns a new array with the products that have price less than or equal to 5000
console.log(cheap); // it returns a new array with the products that have price less than or equal to 5000
// it does not modify the original array, it just returns a new array with the filtered elements
const speceficProduct = products.filter(product => product.name.includes('n')); // it returns a new array with the products that have name includes 'phone'
console.log(speceficProduct); // it returns a new array with the products that have name includes 'n'

//4. find
const special = products.find(product => product.name.includes('n')); // it returns the first element that matches the condition
console.log(special); 