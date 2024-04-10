class Circle{
    private radius:number;
    constructor(radius:number) {
        this.radius = radius;
    }
    set setRadius(value: number){
        this.radius = value
    }
    get getRadius():number{
        return this.radius
    }
    area(radius:number):number{
        return 3.14 * 2 * radius**2;
    }
    perimeter(radius:number):number{
        return radius * 2 * 3.14
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
