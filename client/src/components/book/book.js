import React from 'react';

const Book = ({ book }) => {
  return (
    <div data-testid="bookItem" style={{ 
      border: '1px solid #ccc',
      padding: '10px',
      margin: '10px',
      borderRadius: '5px',
      backgroundColor: '#dfe3e8',
      fontFamily: "monospace"
    }}>
      <h5>{book.title}</h5>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
    </div>
  );
};

export default Book;