import './about.css';

import React from 'react';


function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>We are a team of passionate developers creating awesome web applications. Our goal is to make the web a better place, one app at a time!</p>
      <nav>
        <a href="/">Home</a> |
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
}

export default About;
