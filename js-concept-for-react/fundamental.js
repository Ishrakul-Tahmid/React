//1. how to declare a variable using let, const, and var
const fatherName = "John";
let season = "summer";
season = "winter";


//2. condition
// 6 basic conditions: > <, <, >=, <=, ==, ===, !=, !==
if(fatherName === 'arnold' || season === 'rainy'){

}
else if(fatherName === 'Arnold'){

}
else{

}
// 3. array
//indexing: 0, 1, 2, 3, 4, 5
//length: 6, push, pop, shift, unshift, slice, splice
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;

//4. loop
//for, while, do while, for of, for in
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
for(let number of numbers){
    console.log(number);
}

//5. function
//function declaration, function expression, arrow function
function add(a, b) {
    const sum = a + b;
    return sum;
    return a + b;
}

//6. object
//object literal, object constructor, object.create, class
// 3 ways to access property of an object: dot notation, bracket notation, destructuring
const person = {
    name: 'John',
    age: 30,
    isMarried: false,
    greet: function() {
        console.log('Hello!');
    }
};
const myVar = 'name';
console.log(person.name); // dot notation
console.log(person['age']); // bracket notation
const { name, age } = person; // destructuring
console.log(name, age); // destructuring
console.log(person[myVar]); // bracket notation; access property using variable


let numbers = [1, 2, 3, 4, 5];
numbers.unshift(0); // add 0 at the beginning of the array
numbers.push(6); // add 6 at the end of the array
numbers.shift(); // remove the first element of the array
numbers.pop(); // remove the last element of the array
numbers.splice(2, 1); // remove 1 element from index 2
numbers.slice(1, 3); // get elements from index 1 to 3 (not included)
