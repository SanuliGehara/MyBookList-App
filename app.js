// Book Class : Represent a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class : Handle the UI
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '343434'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '454545'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            if (confirm('Do you want to remove this Book?')) {
                el.parentNode.parentNode.remove();
            }
        }
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// Store Class : Handles storage

// Event : Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks());

// Event : Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent default
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Instantiate a book
    const book = new Book(title, author, isbn);

    // Add Book to UI
    UI.addBookToList(book);

    //Clear fields
    UI.clearFields();
});

// Event :  Remove a book
document.querySelector('#book-list').addEventListener('click', (e)=>{
    UI.deleteBook(e.target);
});