import React from 'react';
import Book from '../components/book/book';
import { useData } from '../utils/utils';
import Loading from '../components/loading/loading';
import Error from '../components/error/error';

const SERVER = 'http://localhost:3001/api/books';

const Books = () => {
  const { data = {}, error, loading } = useData(SERVER);
  
  if(loading) return (<Loading />);
  if (error) return (<Error message={error} />);

  const books = data.books || [];
  return (
    <div>
      <div className="container book-list" id="bookListContainer" data-testid="bookListContainer">
        <h3>Books available:</h3>
        {!!books.length && (
          <div data-testid="books" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            padding: '20px',
            justifyContent: 'center'
          }}>
            {books.map(book => (
              <Book key={book.isbn} book={book} />
            ))}
          </div>
        )}
        {books.length === 0 && (
          <p className="no-books">No books available!</p>
        )}
      </div>
    </div>
  );
};

export default Books;
