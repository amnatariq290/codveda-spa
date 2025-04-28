import './home.css';  // Import the CSS file
import React from 'react';


function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple React SPA with three pages.</p>
      <nav>
        <a href="/">Home</a> |
        <a href="/about">About</a> |
        <a href="/contact">Contact</a>
      </nav>
      <footer>Made with ❤️ by Amna</footer>
    </div>
  );
}

export default Home;
