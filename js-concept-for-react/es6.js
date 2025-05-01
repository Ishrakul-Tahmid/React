const numbers = [1, 2, 3, 4, 5];
const person = {
    name: 'John',
    age: 30,
    isMarried: false,
    greet: function() {
        console.log('Hello!');
    }
};

//1. template literals/string interpolation
const about = `My name is ${person.name}. I am ${person.age} years old. I am ${person.isMarried ? 'married' : 'not married'}.`;
console.log(about); // My name is John. I am 30 years old. I am not married.

//2. arrow function
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
const add2 = (a, b) => {
    const sum = a + b;
    return sum;
};
console.log(add2(2, 3)); // 5
const add3 = (a, b) => {
    return a + b;
};

const isEven = x => x % 2 == 0;
console.log(isEven(2)); // true
console.log(isEven(3)); // false

//3. spread operator
const newNumbers = [...numbers, 6, 7, 8]; //it creates a new array with the elements of the original array and adds 6, 7, and 8 to it and dont modify the original array
console.log(newNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]