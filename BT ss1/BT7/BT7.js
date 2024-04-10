let nums = [1,5,7,3,4,6,7,4,2];
let num = 5;

function findNum(nums, num){
    let subNum = nums.filter((item) =>{
        return item <= num;
    });
    return Math.max(...subNum);
}

console.log(findNum(nums, num));