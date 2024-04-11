"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(this.name);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
}
const student1 = new Student("Mai", Math.floor(Math.random() * 1000000));
student1.displayInfo();
