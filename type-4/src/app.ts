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
  name1: 'John',
  sex: 'male'
};

const person2 = {
  ...person
};

console.log(person);

/////////////////////////////////////////////////////////////////////////////////////////////////////
// rest parameter

// const add2 = (a: number, b: number, c: number, d: number) => {
//   return a + b + c + d;
// };

const add2 = (...number: number[]) => {
  // this can help us in accepting an unlimited amount of parameters
  return number.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumber = add2(4, 4, 52, 1);
console.log(addNumber);

////////////////////////////////////////////////////////////////////////////////////////////////////
// array and object destructuring

const [hobbie1, hobbie2, ...otherhobbits] = apple; // array destructuring
console.log(hobbits, otherhobbits, hobbie1);

const { name1: firstname, sex } = person; // object destructuring
console.log(firstname, sex);
