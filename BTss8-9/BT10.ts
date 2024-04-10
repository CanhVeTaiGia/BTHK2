interface Person{
    name: string,
    age: number,
}

interface Employee extends Person{
    employeeId: number
}

const employee: Employee = {
    name: "Hải",
    age: 30,
    employeeId: 1
}
console.log(employee);
