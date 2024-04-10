let books = [{
    id: 1,
    name: "The Catcher in the Rye"
},{
    id: 2,
    name: "Roshidere"
}];

let result = books.filter((item,index) => {
    return item.id === 1;
})

if(result.length > 0){
    console.log(result);
}else{
    console.log("Không kết quả tìm kiếm");
}