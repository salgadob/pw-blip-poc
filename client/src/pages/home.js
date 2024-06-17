import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const books = [
    {
      title: 'The Enchanted Forest',
      synopsis: 'A magical tale of adventure and friendship as young Lily discovers a hidden world within the forest, filled with mystical creatures and powerful secrets.',
    },
    {
      title: 'Journey to the Stars',
      synopsis: 'Follow astronaut Jake Thompson on his daring mission to explore the outer reaches of our galaxy, facing unimaginable challenges and uncovering the mysteries of the universe.',
    },
    {
      title: 'The Secret Garden',
      synopsis: 'An inspiring story of a young girl who transforms an abandoned garden into a place of beauty and wonder, healing and bringing joy to those around her.',
    },
  ];

  return (
    <div>
      <p>Welcome to Blip's library!</p>
      <p>We have books & movies available for renting. Pick what you like. </p>

      <h2 id='recently'>Recently added titles</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {books.map((book, index) => (
          <div key={index} style={{ width: '30%', margin: '10px' }}>
            <h3>{book.title}</h3>
            <p>{book.synopsis}</p>
          </div>
        ))}
      </div>

      <Link to="/library">See all Books | </Link>
      <Link to="/movies"> See all Movies</Link>
    </div>
  );
};

export default Home;
