// Array.some names

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((nam) => nam === name)  
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

// Array.every people

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minAge) => {
  return arr.every((people) => people.age >= minAge);
} 

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));
