class Employee{
    public name: string;
    protected company: string;
    private phone: number;
    constructor(name: string, company: string, phone: number){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(): void{
        console.log(this.name, this.company, this.phone);
    }
    get getPhone():number{
        return this.phone;
    }
}

class Manager extends Employee{
    teamSize: number;
    constructor(name: string, company: string, phone: number, teamSize: number = 5) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo(): void {
        console.log(this.name, this.company, this.getPhone, this.teamSize);
    }
}
// console.log(employee1.name);
const manager = new Manager("Hello", "PTIT", 12312131);
manager.printInfo();