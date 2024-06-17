import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div data-testid="bookItem" style={{ 
      border: '1px solid #ccc',
      padding: '10px',
      margin: '10px',
      borderRadius: '5px',
      backgroundColor: '#d9d2ce'
    }}>
      <h5>{book.title}</h5>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
    </div>
  );
};

export default BookItem;