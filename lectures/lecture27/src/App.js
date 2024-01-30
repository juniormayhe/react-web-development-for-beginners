import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './components/Blog';
import Post from './components/Post';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <h1>Menu</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/posts/:postId" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
