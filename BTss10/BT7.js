"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    set setRadius(value) {
        this.radius = value;
    }
    get getRadius() {
        return this.radius;
    }
    area(radius) {
        return 3.14 * 2 * radius ** 2;
    }
    perimeter(radius) {
        return radius * 2 * 3.14;
    }
}
let circle = new Circle(5);
console.log(circle);
console.log(circle.area(circle.getRadius));
console.log(circle.perimeter(circle.getRadius));
circle.setRadius = 6;
console.log(circle);
console.log(circle.area(circle.getRadius));
console.log(circle.perimeter(circle.getRadius));
