function checkType(a:number| string| number[]):any{
    if(typeof(a) === "number") return a**2;
    if(typeof(a) === "string") return a.length;
    if(Array.isArray(a) === true) return a.reduce((acc,value) => {
        return acc + value;
    },0)
}
console.log(checkType(5));
console.log(checkType("Hello"));
console.log(checkType([5,6]));
