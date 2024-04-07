import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-Green h-20 flex items-center justify-between px-4 ">
      <Link to="/"><img src="/logoAgrodispi.png" alt="Logo Agrodispi" className="h-16" /></Link>
      
      <nav>
        <ul className="flex">
          <li className="mr-6">
            <Link to="/" className="hover:text-white font-bold transition duration-300">Home</Link>
          </li>
          <li className="mr-6">
            <Link to="/sobre" className="hover:text-white font-bold transition duration-300">Sobre</Link>
          </li>
          <li>
            <Link to="/contato"className="hover:text-white font-bold transition duration-300">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
