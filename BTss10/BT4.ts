class Vehicle1{
    public name: string;
    protected year: number;
    private company: string;
    readonly id: number;
    constructor(name:string, year:number, company:string, id:number) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }  
}
let vehiclen = new Vehicle1("BMW", 2020, "BMW company", Math.floor(Math.random() * 10000))
console.log(vehiclen);

