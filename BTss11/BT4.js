"use strict";
class Vehicle {
    constructor(id, name, speed) {
        this.id = id;
        this.name = name;
        this.speed = speed;
    }
    speedUp(value) {
        return this.speed += value;
    }
    slowDown(value) {
        return this.speed -= value;
    }
    showSpeed() {
        console.log(this.speed);
    }
}
class Bycycle extends Vehicle {
    constructor(id, name, speed, gear = 5) {
        super(id, name, speed);
        this.gear = gear;
    }
}
const bycycle = new Bycycle(Math.floor(Math.random() * 100 + 1), "by", 40, 10);
bycycle.speedUp(50);
bycycle.showSpeed();
bycycle.slowDown(10);
bycycle.showSpeed();
