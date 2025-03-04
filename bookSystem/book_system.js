let books = []; //array

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        // object literal
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showbooks() {
    // array of html code corresponding to each book
    //const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        //<p><strong>Book Name: </strong>${book.name}</p>
        //<p><strong>Author Name:</strong> ${book.authorName}</p>
        //<p><strong>Book Description:</strong> ${book.bookDescription}</p>
        //<p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        //<button onclick="deleteBook(${index})">Delete Book</button>`
    //);

    // practice task: delete button/function
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="deleteBook(${index})">Delete Book</button>`
    ); 


    // booksDiv.join('') concats elements; outcome is one string of html code
    // innerHTML = booksDivs.join('') replaces existing content within element 'books'  
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

// pratice task: delete button/function
function deleteBook(bookIndex) {
    books.splice(bookIndex, 1);
    showbooks();

}