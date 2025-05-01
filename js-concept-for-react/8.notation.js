const person = {
    name: 'Lal Nil Holud mia',
    profession: 'Traffic Surgeon',
    age: 39,
    25: 'Twenty Five',
    'son-name': 'Lal Nil',
     address: 'Shahabag'
};

// dot notation
const prof1 = person.profession;

// bracket notation
const prof2 = person["profession"];
const pName = 'profession';
const prof3 = person[pName];
const prof4 = person[25]; // 25 is a number, so it should be in quotes to be a valid key
const p5rof = person['son-name'];

console.log(prof3);
