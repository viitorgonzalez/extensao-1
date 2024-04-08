import React from "react";

function Header() {
  return (
    <header className="h-20 flex items-center justify-between p-4 w-full fixed bg-BackgroundImg bg-no-repeat bg-cover">
      <nav className="flex items-center justify-between w-full">
        <img src="/logoAgrodispi.png" alt="Logo" className="w-20 mr-"></img>
        <ul className="flex">
          <li className="mr-6 hover:text-white font-bold transition duration-300">
            <a href="#home">Home</a>
          </li>
          <li className="mr-6 hover:text-white font-bold transition duration-300">
            <a href="#services">Serviços</a>
          </li>
          <li className="mr-6 hover:text-white font-bold transition duration-300">
            <a href="#about">Sobre</a>
          </li>
          <li className="mr-6 hover:text-white font-bold transition duration-300">
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
