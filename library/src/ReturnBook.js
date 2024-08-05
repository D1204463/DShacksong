// ReturnBooks.js

async function returnBook() {
    const bookId = document.getElementById('return-book-id').value;
    const userId = document.getElementById('return-user-id').value;

    try {
        const result = await fetchApi('books/return', 'POST', { bookId, userId });
        alert(result.message);
    } catch (error) {
        alert('還書失敗');
    }
}
