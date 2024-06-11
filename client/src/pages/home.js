import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
      <Link to="/library">Go to Blip's Library Page</Link>
    </div>
  );
};

export default Home;