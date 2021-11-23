class Department { // this is class and its uses 
  name: string;
  code: string;
  members: number

  constructor(a: string, b: string, c: number) {
    this.name = a;
    this.code = b;
    this.members = c;
  }
}

const trade = new Department('Racket', 'hdabf', 454);

console.log(trade);