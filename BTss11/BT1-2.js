"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(this.name, this.company, this.phone);
    }
    get getPhone() {
        return this.phone;
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize = 5) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log(this.name, this.company, this.getPhone, this.teamSize);
    }
}
// console.log(employee1.name);
const manager = new Manager("Hello", "PTIT", 12312131);
manager.printInfo();
