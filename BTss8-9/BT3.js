"use strict";
function calculateArea(geo) {
    if (geo.type === 'square') {
        return geo.sideLength ** 2;
    }
    if (geo.type === 'circle') {
        return Math.PI * geo.radius ** 2;
    }
}
const square = {
    type: 'square',
    sideLength: 5,
};
const circle = {
    type: 'circle',
    radius: 3,
};
console.log(calculateArea(square));
console.log(calculateArea(circle));
