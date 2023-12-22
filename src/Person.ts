import Employees from "./Employees";

type PersonProps = {
  name: string
  age: number
  role: string
  id?: string
}

class Person {
  name: string;
  age: number;
  role: string;
  // todo - create an id property for each person

  constructor(name: string, age: number, role: string, employees: Employees) {
    this.name = name;
    this.age = age;
    this.role = role;

    Employees.addEmployee(this)

    return this
  }

  getName() {
    // return the person name
  }

  getAge() {
    // return the person age
  }

  getRole() {
    // return the person role
  }
}

export default Person