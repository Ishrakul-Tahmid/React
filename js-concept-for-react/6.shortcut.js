// 'almas', 5, true, {}, []
// '', 0, false, null, undefined
// check if the variable is truthy or falsy
let myVar = 5;
if (myVar) {
  myVar = myVar * 100;
} 
else {
  myVar = 0;
}

const money = 80;
let food;

if (money > 100) {
  food = 'biryani';
} else {
  food = 'cha biscuit';
}

// ternary
let food1 = money > 100 ? 'biryani' : 'cha biscuit';

// number to string conversion
const num1 = 52;
console.log(num1);

const numStr = num1 + '';
console.log(numStr);

// string to number
const input = '560';
const inputNum = +input;
console.log(inputNum);

let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');

// isActive ? showUser() : hideUser();

// use && if the left side is true then right side will be executed
isActive && showUser();

// use
//toggle boolean value
isActive = !isActive; // it will toggle the value of isActive