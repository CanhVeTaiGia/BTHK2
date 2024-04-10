"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get getWidth() {
        return this.width;
    }
    get getHeight() {
        return this.height;
    }
    set setWidth(width) {
        this.width = width;
    }
    set setHeight(height) {
        this.height = height;
    }
    parameter() {
        return (this.width + this.height) * 2;
    }
    area() {
        return this.width * this.height;
    }
}
let rectangle = new Rectangle(5, 10);
console.log(rectangle.getHeight);
console.log(rectangle.getWidth);
console.log(rectangle.area());
console.log(rectangle.parameter());
rectangle.setWidth = 6;
rectangle.setHeight = 7;
console.log(rectangle.getHeight);
console.log(rectangle.getWidth);
console.log(rectangle.area());
console.log(rectangle.parameter());
