interface book{
    title:string,
    author:string,
    price:number,
};
let book = {
    title: "The Alchemist", 
    author: "Alan",
    price: 50000,
};

function printBook(book:unknown):void{
    console.log(book);
    
}
printBook(book);
function updateBook(book:unknown, title:string, author:string, price:number):void{
    book = {
        title: title,
        author: author,
        price: price,
    }
}
updateBook(book, book.title, book.author, book.price);
printBook(book);