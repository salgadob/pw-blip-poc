import React, { useState, useEffect } from 'react';
import BookItem from '../components/bookItem';

const Library = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setData(null);
      setError(null);
      try {
        const response = await fetch('http://localhost:3001/api/books');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.books);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p className="no-books-error" style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && data && (
        <div className="container book-list" id="bookListContainer" data-testid="bookListContainer">
          <h3>Books available:</h3>
          {!!data.length && (
            <ul id="books" data-testid="books">
              {data.map(book => (
                <BookItem key={book.isbn} book={book} />
              ))}
            </ul>
          )}
          {data.length === 0 && (
            <p className="no-books">No books available!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Library;
