// This is an Action creator it needs to return an Action means
// an object with a type property
export function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}