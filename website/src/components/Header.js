import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-500 h-20 flex items-center justify-between px-4">
      <img src="/logo-agrodispi.jpg" alt="Logo Agrodispi" className="h-16" />
      
      <nav>
        <ul className="flex">
          <li className="mr-6">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-6">
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
