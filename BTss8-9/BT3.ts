type GeometricObject = Square | Circle;
interface Square {
  type: 'square';
  sideLength: number;
}
interface Circle {
  type: 'circle';
  radius: number;
}
function calculateArea(geo: GeometricObject):any {
  if (geo.type === 'square') {
    return geo.sideLength**2;
  }if (geo.type === 'circle') {
    return Math.PI * geo.radius**2;
  }
}
const square: Square = {
  type: 'square',
  sideLength: 5,
};
const circle: Circle = {
  type: 'circle',
  radius: 3,
};
console.log(calculateArea(square));
console.log(calculateArea(circle));