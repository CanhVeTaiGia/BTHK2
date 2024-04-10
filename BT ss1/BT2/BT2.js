let numbers =[
    {id:1, number: 25},
    {id:1, number: 30},
    {id:1, number: 50}
 ];

console.log(numbers.map((item, index, arr) =>{
    if(item.number < 30){
        return item.number += 10;
    }
    else if(item.number > 10){
        return item.number -= 10;
    }else{
        return item.number;
    }
}));
 