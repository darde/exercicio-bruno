import Person from "./Person";
import Employees from './Employees'

type PessoaProps = {
  name: string;
  age: number;
  role: string;
};


const p1 = new Person('Pablo', 45, 'developer', Employees)

console.log(p1)

console.log('\n\n--- get employess ---')
console.log(Employees.getEmployees())

console.log('\n\n--- get employee by name ---')
console.log(Employees.getEmployeeByName('Pablo'))

console.log('\n\n--- get non-existing employee')
console.log(Employees.getEmployeeByName('John'))

