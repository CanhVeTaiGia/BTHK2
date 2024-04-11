"use strict";
class Difference {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}
class Son extends Difference {
    constructor(a, b) {
        super(a, b);
        this.a = a;
        this.b = b;
    }
}
