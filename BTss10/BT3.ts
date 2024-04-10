class Employee{
    public name: string;
    protected company: string;
    private phone: number;
    constructor(name:string, company:string, phone:number){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo():void{
        console.log(this.name, this.company, this.phone);
    }
}
let employee1 = new Employee("Hoa", "RA", 9123131231);
employee1.printInfo();