import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Library from './pages/library';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Blip's Library</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Movies</Link>
              </li>
              <li>
                <Link to="/library">Books</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
