import React, { useState, useEffect, useRef } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const menuRef = useRef(null);
  const isMouseDown = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && !menuRef.current.contains(event.target)) {
        if (!isMouseDown.current) {
          setMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMouseDown = () => {
    isMouseDown.current = true;
  };

  const handleMouseUp = () => {
    isMouseDown.current = false;
  };

  return (
    <header className="z-50 h-20 flex items-center justify-between p-4 w-full fixed bg-Green ">
      {isMobile ? (
        <img src="/logoAgrodspi.jpg" alt="Logo" className="w-20"></img>
      ) : (
        <nav className="flex items-center justify-between w-full">
          <img src="/logoAgrodspi.jpg" alt="Logo" className="w-20 mr-"></img>
          <ul className="flex">
            <li className="mr-6 hover:text-white font-bold transition duration-300">
              <a href="#home">Home</a>
            </li>
            <li className="mr-6 hover:text-white font-bold transition duration-300">
              <a href="#bestSellers">Mais vendidos</a>
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
      )}
      {isMobile && (
        <button
          onClick={toggleMenu}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className="block md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 m-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      )}
      {menuOpen && (
        <ul
          ref={menuRef}
          className="mr-2 absolute top-24 right-0 bg-white p-4 rounded-lg shadow-lg"
        >
          <li
            onClick={closeMenu}
            className="mb-2 text-sm md:text-lg hover:text-gray-800 font-bold transition duration-300"
          >
            <a href="#home">Home</a>
          </li>
          <li
            onClick={closeMenu}
            className="mb-2 text-sm md:text-lg hover:text-gray-800 font-bold transition duration-300"
          >
            <a href="#bestSellers">Mais vendidos</a>
          </li>
          <li
            onClick={closeMenu}
            className="mb-2 text-sm md:text-lg hover:text-gray-800 font-bold transition duration-300"
          >
            <a href="#services">Serviços</a>
          </li>
          <li
            onClick={closeMenu}
            className="mb-2 text-sm md:text-lg hover:text-gray-800 font-bold transition duration-300"
          >
            <a href="#about">Sobre</a>
          </li>
          <li
            onClick={closeMenu}
            className="mb-2 text-sm md:text-lg hover:text-gray-800 font-bold transition duration-300"
          >
            <a href="#contact">Contato</a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
