let arr1 = [1,2];
let arr2 = [6,7,8];
let arr3 = [12,8];
function sumEachArr(...arr){
    const result = [];
    for(const key of arr){
        const sum = key.reduce((a, b) => a + b, 0);
        result.push(sum);
    }
    return result;
}

console.log(sumEachArr(arr1, arr2, arr3));