////////////////////////////////////////////////////////////////////////////////////////////////
// this is the easiest use of a simple class
class Department {
  // this is class and its uses
  name: string;
  code: string;
  members: number;

  constructor(a: string, b: string, c: number) {
    this.name = a;
    this.code = b;
    this.members = c;
  }


  destruct() {
    console.log("Fuck of: " + name);
  }
}

const trade = new Department('Racket', 'hdabf', 454);

console.log(trade);
