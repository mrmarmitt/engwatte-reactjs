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
          <img src="/header-logo-engwatte.png" alt="Logo" />
        </div>
        <button className="header-menu-button" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`header-menu ${menuOpen ? 'header-menu-open' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Solicite um orçamento</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
