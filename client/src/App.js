import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Library from './pages/library';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Blip's Page</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
