// const person: { // this is called explicit type assignment
//   name: string;
//   age: number;
//   hobbies: string[]; // this is how arrays are identified in typescript
//   favNum: number[]; // this is how arrays of numbers are identified in typescript
//   favSportsPerson: any[];
//   role: [number, string]; // this is a tuple type;
// } = {
//   name: 'John',
//   age: 34,
//   hobbies: ['sports', 'cooking'],
//   favNum: [7, 4, 3, 2],
//   favSportsPerson: ['Ronaldo', 7],
//   role: [5, 'maya']
// };

enum Role {
  ADMIN = 69,
  READ_ONLY = 'RANU',
  AUTHOR = 420
}

const person = {
  // this is called inference type assignment
  name: 'John',
  age: 34,
  hobbies: ['sports', 'cooking'],
  favNum: [7, 4, 3, 2],
  favSportsPerson: ['Ronaldo', 7],
  role: Role.AUTHOR
};

// person.role.pop();
// person.role.push('mayank');
// console.log(person.role);

let favoriteActivity: string[];
// favoriteActivity = ['sports', 6]; // this will show error as the array is only of the string !!

let favoriteActivity2: any[];
favoriteActivity2 = ['sports', 6]; // this will not error ! but it has its own downside on the backend side of things

console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log('correct role');
} else {
  console.log('fuck you dickhead go suck you balls ');
}
