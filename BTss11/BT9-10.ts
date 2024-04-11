class Shape{
    calculateArea(width: number, height: number):number;
    calculateArea(radius: number):number;
    calculateArea(a: number, b?:any):number{
        if(b){
            return a * b;
        }
        return Math.PI * a**2;
    }
    calculatePerimeter(width: number, height: number):number;
    calculatePerimeter(radius: number):number;
    calculatePerimeter(a: number, b?:any):number{
        if(b){
            return 2 * (a + b);
        }
        return 2 * Math.PI * a;
    }
}
class Rectangle extends Shape{
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
    get getWidth(): number{
        return this.width;
    }
    get getHeight(): number{
        return this.height;
    }
}
class Circle extends Shape{
    private radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    get getRadius(): number{
        return this.radius;
    }
}
const rectangle = new Rectangle(5, 10);
const circle = new Circle(3);
console.log(rectangle.calculateArea(rectangle.getWidth, rectangle.getHeight));
console.log(circle.calculateArea(circle.getRadius));
console.log(rectangle.calculatePerimeter(rectangle.getWidth, rectangle.getHeight));
console.log(circle.calculatePerimeter(circle.getRadius));