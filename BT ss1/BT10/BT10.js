let arr1 = [1, 2, "1", 3, "a"];
let arr2 = [1, 2, 3, 4];
let filterArray = (arr1, arr2) => {
    return arr1.filter(item =>!arr2.includes(item));
}
let filterArr = arr1.filter((item) =>{
    if(arr2.includes(item)){
        return item
    }
})
arr1 = filterArray(arr1, arr2);
console.log(filterArr);
console.log(arr1);