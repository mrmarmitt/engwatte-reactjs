import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="header-logo">
        <img src="/header-logo-engwatte.png" alt="Logo" />
      </div>
      <div className='header-nav'>
        <nav>
          <button className="header-menu-button" onClick={toggleMenu}>
            &#9776;
          </button>
          <ul className={`header-menu ${menuOpen ? 'header-menu-open' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            {/* <li><Link to="/cases">Cases</Link></li> */}
            <li><Link to="/contato">Solicite um orçamento</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
