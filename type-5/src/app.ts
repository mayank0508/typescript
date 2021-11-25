////////////////////////////////////////////////////////////////////////////////////////////////
// this is the easiest use of a simple class
class Department {
  // this is class and its uses
  // name: string;
  // // code: string;
  // // members: number;
  private employee: string[] = []; //this is how we initialize a array of employees

  constructor(public name: string, private readonly id: number) {
    // this.name = a;
    // this.employee = [];
    // this.code = b;
    // this.members = c;
  }

  destruct(this: Department) {
    // console.log('Fuck of: ' + this.name);
    console.log(`ID: ${this.id} --> Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employee.push(employee);
  }

  printEmployee() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

const trade = new Department('Racket', 76);
trade.addEmployee('Mayank');
trade.addEmployee('Maya');
// trade.employee[2] = 'paru'

trade.printEmployee();

// console.log(trade);

trade.destruct();

// const DepartmentCopy = {
//   name: 'mum',
//   destruct: trade.destruct
// };

// DepartmentCopy.destruct();
