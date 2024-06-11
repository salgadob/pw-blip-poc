import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div data-testid="bookItem">
      <h5>{book.title}</h5>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
    </div>
  );
};

export default BookItem;