// Code goes here!

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
}


// const add = (a: number, b: number) =>  a + b; this is only in use if you have only one fucntion
    

console.log(add(3,5))


