class Person{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    displayInfo():void{
        console.log(this.name);
    }
}
class Student extends Person{
    id: number;
    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }
}
const student1 = new Student("Mai", Math.floor(Math.random() * 1000000))
student1.displayInfo()