"use strict";
;
let book = {
    title: "The Alchemist",
    author: "Alan",
    price: 50000,
};
function printBook(book) {
    console.log(book);
}
printBook(book);
function updateBook(book, title, author, price) {
    book = {
        title: title,
        author: author,
        price: price,
    };
}
updateBook(book, book.title, book.author, book.price);
printBook(book);
