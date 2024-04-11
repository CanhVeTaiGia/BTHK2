"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(this.name, this.price);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    getDescription() {
        console.log(this.name, this.price, this.getBrand);
    }
    get getBrand() {
        return this.brand;
    }
}
