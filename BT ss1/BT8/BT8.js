let newArr = (arr1, arr2, i) =>{
    return arr1.splice(i, 0, ...arr2);
}
let arr1 = [1,2,"a",6,7];
let arr2 = ["b","hai"];
let i = 2;
newArr(arr1, arr2, i);
console.log(arr1);