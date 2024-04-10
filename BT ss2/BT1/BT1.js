function hasNegativeNumber(arr){
    arr.some((item) =>{
        return item < 0;
    });
}
console.log(hasNegativeNumber([1, 2, 3, 4, -5]));