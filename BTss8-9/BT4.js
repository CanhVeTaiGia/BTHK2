"use strict";
function squareNumbers(a) {
    if (typeof (a) === "number") {
        return a ** 2;
    }
    if (Array.isArray(a)) {
        return a.map(value => value ** 2);
    }
}
console.log(squareNumbers(5));
console.log(squareNumbers([3, 5, 6]));
