let obj1 = {
    id: 1,
    name: "hallo"
};
let obj2 = {
    price: 1000,
    id: 3,
};
function fusion(obj1, obj2){
    let obj3 = {...obj1, ...obj2};
    return obj3
}
console.log(fusion(obj1, obj2));