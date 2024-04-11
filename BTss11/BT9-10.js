"use strict";
class Shape {
    calculateArea(a, b) {
        if (b) {
            return a * b;
        }
        return Math.PI * a ** 2;
    }
    calculatePerimeter(a, b) {
        if (b) {
            return 2 * (a + b);
        }
        return 2 * Math.PI * a;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    get getWidth() {
        return this.width;
    }
    get getHeight() {
        return this.height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    get getRadius() {
        return this.radius;
    }
}
const rectangle = new Rectangle(5, 10);
const circle = new Circle(3);
console.log(rectangle.calculateArea(rectangle.getWidth, rectangle.getHeight));
console.log(circle.calculateArea(circle.getRadius));
console.log(rectangle.calculatePerimeter(rectangle.getWidth, rectangle.getHeight));
console.log(circle.calculatePerimeter(circle.getRadius));
