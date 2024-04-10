"use strict";
class Vehicle1 {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
}
let vehiclen = new Vehicle1("BMW", 2020, "BMW company", Math.floor(Math.random() * 10000));
console.log(vehiclen);
