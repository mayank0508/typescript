let userInput: unknown; // this is the unknow type !, here we can store any value with out any error !
let userName: string;

userInput = 4;
userInput = 'mayank';
userName = 'haha';
// userName = 4; error !

// userName = userInput; // here any would not show a issue !

// any is the more flexible of it and unknown, both are kinda same but it all comes down to stricking of the language

function errorthrow(message: string, number: number) {
  throw { error: message, code: number };
}

errorthrow('Hi sexy', 432)
