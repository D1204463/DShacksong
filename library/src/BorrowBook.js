// BorrowBook.js

async function borrowBook() {
    const bookId = document.getElementById('borrow-book-id').value;
    const userId = document.getElementById('borrow-user-id').value;

    try {
        const result = await fetchApi('books/borrow', 'POST', { bookId, userId });
        alert(result.message);
    } catch (error) {
        alert('借書失敗');
    }
}
