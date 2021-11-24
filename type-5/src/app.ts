////////////////////////////////////////////////////////////////////////////////////////////////
// this is the easiest use of a simple class
class Department {
  // this is class and its uses
  name: string;
  // code: string;
  // members: number;

  constructor(a: string) {
    this.name = a;
    // this.code = b;
    // this.members = c;
  }

  destruct(this: Department) {
    console.log('Fuck of: ' + this.name);
  }
}

const trade = new Department('Racket');

// console.log(trade);

trade.destruct();

const DepartmentCopy = {
  name: 'mum',
  destruct: trade.destruct
};

DepartmentCopy.destruct();
