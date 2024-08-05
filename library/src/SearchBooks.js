// SearchBooks.js

async function searchBooks() {
    const query = document.getElementById('search-query').value;

    try {
        const books = await fetchApi(`books/search?query=${encodeURIComponent(query)}`, 'GET');
        const resultsDiv = document.getElementById('search-results');
        resultsDiv.innerHTML = books.map(book => `<p>${book.title} by ${book.author}</p>`).join('');
    } catch (error) {
        alert('搜尋失敗');
    }
}
