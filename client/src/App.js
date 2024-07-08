import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Books from './pages/books';
import Movies from './pages/movies';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Blip's Library</h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies" className={({ isActive }) => (isActive ? 'active' : '')}>Movies</NavLink>
              </li>
              <li>
                <NavLink to="/books" className={({ isActive }) => (isActive ? 'active' : '')}>Books</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </main>
        <p id='authors'>created with ❤ by anabela & barbs</p>
      </div>
    </Router>
  );
}

export default App;