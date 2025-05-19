import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="header-nav">
        <div className="header-logo">
          My Website
        </div>
        <button className="header-menu-button" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`header-menu ${menuOpen ? 'header-menu-open' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
