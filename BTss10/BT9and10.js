"use strict";
class Book {
    constructor(title, author, quantity) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }
    get getTitle() {
        return this.title;
    }
    get getAuthor() {
        return this.author;
    }
    get getQuantity() {
        return this.quantity;
    }
    set setQuantity(value) {
        this.quantity = value;
    }
}
let book1 = new Book("Onimai", "Nekotofu", 3);
let book2 = new Book("Roshidere", "SunSunSun", 2);
let book3 = new Book("Shimobsuki", "Yagami Kagami", 5);
let book4 = new Book("Onimai", "Nekotofu", 1);
let book5 = new Book("KuraNika", "Takata", 4);
class Library {
    constructor(books) {
        this.books = books;
    }
    addBooks(book) {
        const existingBook = this.books.find(item => item.getTitle === book.getTitle && item.getAuthor === book.getAuthor);
        if (existingBook) {
            existingBook.setQuantity = existingBook.getQuantity + book.getQuantity;
        }
        else {
            this.books.push(book);
        }
    }
    readBookList() {
        console.log(this.books);
    }
}
const library = new Library([]);
library.addBooks(book1);
library.addBooks(book2);
library.addBooks(book3);
library.addBooks(book4);
library.addBooks(book5);
library.readBookList();
