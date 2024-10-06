// Sample book data (in a real application, this would come from a server)
const books = [
    { id: 1, title: "The Great Adventure", author: "John Doe", price: 19.99 },
    { id: 2, title: "Mystery at Midnight", author: "Jane Smith", price: 15.99 },
    { id: 3, title: "Cooking Mastery", author: "Chef Gordon", price: 24.99 },
    { id: 4, title: "Science Explained", author: "Dr. Einstein", price: 29.99 },
    { id: 5, title: "Historical Figures", author: "Historian Brown", price: 22.99 },
    { id: 6, title: "Fantasy World", author: "Magician White", price: 17.99 },
];

function displayBooks(booksToShow) {
    const bookGrid = document.getElementById('bookGrid');
    bookGrid.innerHTML = '';

    booksToShow.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <img src="https://via.placeholder.com/150" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>$${book.price.toFixed(2)}</p>
        `;
        bookGrid.appendChild(bookCard);
    });
}

function searchBooks(query) {
    return books.filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
}

document.addEventListener('DOMContentLoaded', () => {
    displayBooks(books);

    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = document.getElementById('search').value;
        const filteredBooks = searchBooks(query);
        displayBooks(filteredBooks);
    });
});