import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home1 from './home1';
import About1 from './about1';
import Contact1 from './contact1';

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to the React SPA!</h1>

        {/* Navigation Links */}
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/about">About</Link> | 
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/about" element={<About1 />} />
          <Route path="/contact" element={<Contact1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

