// Json

const student = {
  name: 'Salib Khan',
  age: 32,
  movies: ['king khan', 'Dhakar Mastan']
};
const studentJSON = JSON.stringify(student); // convert object to JSON string
console.log(studentJSON); // {"name":"Salib Khan","age":32,"movies":["king khan","Dhakar Mastan"]}
console.log(student); // { name: 'Salib Khan', age: 32, movies: [ 'king khan', 'Dhakar Mastan' ] }

const studentObj = JSON.parse(studentJSON); // convert JSON string to object
console.log(studentObj); // { name: 'Salib Khan', age: 32, movies: [ 'king khan', 'Dhakar Mastan' ] }

//2. fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json()) // convert response to JSON
    .then(data => console.log(data)); // log the JSON data
// it returns a promise, so we can use .then() to handle the response
// it fetches data from the API and logs it to the console

// keys, values, entries
const keys = Object.keys(student); // it returns an array of the keys of the object
console.log(keys); // [ 'name', 'age', 'movies' ]
const values = Object.values(student); // it returns an array of the values of the object
console.log(values); // [ 'Salib Khan', 32, [ 'king khan', 'Dhakar Mastan' ] ]
const entries = Object.entries(student); // it returns an array of the key-value pairs of the object
console.log(entries); // [ [ 'name', 'Salib Khan' ], [ 'age', 32 ], [ 'movies', [ 'king khan', 'Dhakar Mastan' ] ] ]
// it returns an array of arrays, where each inner array is a key-value pair of the object

// for of loop
const numbers = [12, 34, 45, 56, 67];
numbers.forEach(number => console.log(number)); // it logs each number in the array
numbers.map( num => num * 2); // it returns a new array with each number multiplied by 2
// it does not modify the original array, it just returns a new array with the modified elements


// for of loop on array like object
// loop on an object using for in loop

// add or remove form an object
const products = [
  { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
  { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
  { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
  { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
  { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'logitech', color: 'black' };
products.push(newProduct); // it adds a new product to the end of the array
// copy array and add new product to the end of the array
const newProducts = [...products, newProduct]; // it creates a new array with the elements of the original array and adds the new product to it


// create a new array without speceficProduct
const remaining = products.filter(product => product.name !== 'phone'); // it creates a new array without the product that has name 'phone'
console.log(remaining); // it returns a new array without the product that has name 'phone'