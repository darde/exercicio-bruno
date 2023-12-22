type EmployeesProps = {
  name: string
  age: number
  role: string
}

const employess: EmployeesProps[] = []

class Employees {
  constructor() {

  }

  static addEmployee({ name, age, role }: EmployeesProps) {
    employess.push({
      name,
      age,
      role,
    })
  }

  static getEmployees() {
    return employess
  }

  static getEmployeeByName(name: string) {
    const employee = employess.filter(employee => employee.name === name)[0]

    if (employee) {
      return employee
    }
    return 'Employee not found!'
  }
}

export default Employees