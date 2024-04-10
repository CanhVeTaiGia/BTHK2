class Rectangle{
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    get getWidth():number{
        return this.width;
    }
    get getHeight():number{
        return this.height;
    }
    set setWidth(width: number){
        this.width = width;
    }
    set setHeight( height: number){
        this.height = height
    }
    parameter():number{
        return (this.width + this.height) * 2;
    }
    area():number{
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