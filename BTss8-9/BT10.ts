interface Person1{
    name: string,
    age: number,
}

interface Employee1 extends Person1{
    employeeId: number
}

const employee: Employee1 = {
    name: "Hải",
    age: 30,
    employeeId: 1
}
console.log(employee);
