
class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`${this.title} is already issued.`);
            return false;
        }

        this.isIssued = true;
        console.log(`${this.title} has been issued.`);
        return true;
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`${this.title} is already available.`);
            return false;
        }

        this.isIssued = false;
        console.log(`${this.title} has been returned.`);
        return true;
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "101"),
    new Book("Wings of Fire", "A.P.J. Abdul Kalam", "102"),
    new Book("Atomic Habits", "James Clear", "103"),
    new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "104", true)
];

function displayAvailableBooks() {
    const availableBooks = books.filter(book => !book.isIssued);

    console.log("Available Books:");

    availableBooks.forEach(book => {
        console.log(`${book.title} | ${book.author} | ISBN: ${book.ISBN}`);
    });
}

function issueBookByISBN(isbn) {
    const book = books.find(book => book.ISBN === String(isbn));

    if (!book) {
        console.log("Book not found.");
        return;
    }

    book.issueBook();
}

displayAvailableBooks();
issueBookByISBN("102");
displayAvailableBooks();
