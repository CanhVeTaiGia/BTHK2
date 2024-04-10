class Book{
    private title: string;
    private author: string;
    private quantity: number;
    constructor(title: string, author: string, quantity: number){
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }
    get getTitle():string{
        return this.title;
    }
    get getAuthor():string{
        return this.author;
    }
    get getQuantity():number{
        return this.quantity;
    }
    set setQuantity(value:number){
        this.quantity = value
    }
}

let book1 = new Book("Onimai", "Nekotofu", 3)
let book2 = new Book("Roshidere", "SunSunSun", 2)
let book3 = new Book("Shimobsuki", "Yagami Kagami", 5)
let book4 = new Book("Onimai", "Nekotofu", 1)
let book5 = new Book("KuraNika", "Takata", 4)

class Library{
    books: Book[];
    constructor(books: Book[]) {
        this.books = books;
    }
    addBooks(book: Book): void{
        const existingBook = this.books.find(item => item.getTitle === book.getTitle && item.getAuthor === book.getAuthor);
        if(existingBook){
            existingBook.setQuantity = existingBook.getQuantity + book.getQuantity;
        }else{
            this.books.push(book);
        }
    }
    readBookList(): void{
        console.log(this.books);
    }

}
const library = new Library([])
library.addBooks(book1);
library.addBooks(book2);
library.addBooks(book3);
library.addBooks(book4);
library.addBooks(book5);
library.readBookList();