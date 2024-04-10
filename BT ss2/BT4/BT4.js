function allNumbersDivisibleBy(arr, n){
    return console.log(arr.every((val) =>{
        return val % 2 === 0
    }));
};

allNumbersDivisibleBy([2, 4, 6, 8, 10], 2);
allNumbersDivisibleBy([2, 4, 6, 8, 11], 2);