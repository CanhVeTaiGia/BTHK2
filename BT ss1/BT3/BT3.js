let arr = [1,2,"z",true,-1,-3];
console.log(arr.filter((item, index, arr) => {
    return parseInt(item) > 0
}));