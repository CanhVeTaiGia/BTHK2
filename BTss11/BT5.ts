class Difference{
    private a: number;
    protected b: number;
    constructor(a: number, b:number) {
        this.a = a;
        this.b = b;
    }
}
class Son extends Difference{
    constructor(a: number, b: number) {
        super(a, b)
        this.a = a;
        this.b = b;
    }
}