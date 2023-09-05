// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>My Top Navbar</h1>
        <ul className="nav-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
