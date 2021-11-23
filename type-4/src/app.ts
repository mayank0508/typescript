////////////////////////////////////////////////////////////////////////////////////////////////
// let and var section
const userName = 'mayank';
let age = 3;
age = 4;

console.log(userName);

if (age > 0) {
  let isAge = true;
  console.log(isAge);
}

// if (age > 0) {
//   var isAge = true;
// }
// console.log(isAge);

//////////////////////////////////////////////////////////////////////////////////////////////////
// arrow section

const add = (a: number, b: number) => {
  return a + b;
};

// const add = (a: number, b: number) =>  a + b; this is only in use if you have only one fucntion

const printOut = (output: number | string) => {
  console.log(output);
};

console.log(add(3, 5));
printOut(add(3, 5));

//////////////////////////////////////////////////////////////////////////////////////////////////
// default function parameter

const add1 = (a: number, b: number = 6) => {
  return a + b;
};

// const add = (a: number, b: number) =>  a + b; this is only in use if you have only one fucntion

console.log(add1(3));

///////////////////////////////////////////////////////////////////////////////////////////////////
// spread opertator

const hobbits = ['🤔', '🤷‍♂️'];
const bamm = ['👾', '😍', '🐍'];
const apple = ['❤', '👀', ...bamm];

apple.push(...hobbits);

console.log(apple);

const person = {
  name: 'John',
  sex: 'male'
};

const person2 = {
  ...person
};
