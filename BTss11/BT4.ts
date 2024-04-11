class Vehicle {
    protected id: number;
    protected name: string;
    protected speed: number;
    constructor(id: number, name: string, speed: number){
        this.id = id;
        this.name = name;
        this.speed = speed;
    }
    speedUp(value: number):number{
        return this.speed += value;
    }
    slowDown(value:number):number{
        return this.speed -= value;
    }
    showSpeed():void{
        console.log(this.speed)
    }
}
class Bycycle extends Vehicle{
    private gear: number;
    constructor(id: number, name: string, speed: number, gear: number = 5) {
        super(id, name, speed)
        this.gear = gear;
    }
}
const bycycle = new Bycycle(Math.floor(Math.random() * 100 + 1), "by", 40, 10);
bycycle.speedUp(50);
bycycle.showSpeed();
bycycle.slowDown(10);
bycycle.showSpeed();