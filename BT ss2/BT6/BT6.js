function sum(arr){
    return console.log(arr.reduce((acc, currentVal) =>{
        return acc += currentVal;
    }));
};
sum([1, 2, 3, 4, 5, 6]);