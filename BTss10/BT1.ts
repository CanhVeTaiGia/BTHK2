class Vehicle{
    name: string;
    year: number;
    company: string;
    constructor(name: string, year: number, company:string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    showInfo():void{
        console.log(`Xe ${this.name} của ${this.company}, sản xuất năm ${this.year}`);
    }
};
const vehicle1 = new Vehicle("BMW", 2023, "BMW Company");
const vehicle2 = new Vehicle("Lamborghini Aventador", 2011, "Lamborghini");
vehicle1.showInfo();
vehicle2.showInfo();