import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShow(true);
      } else if (window.scrollY > lastScrollY) {
        setShow(false); // Scrolling down
      } else {
        setShow(true); // Scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-neutral-800 border-b border-gray-700 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src={logo} alt="Logo Gecko" className="h-16" />
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 justify-end flex-1">
          <li>
            <a href="#productos" className="text-gray-500 hover:text-green-400 transition font-bebas text-lg">Productos</a>
          </li>
          <li>
            <a href="#servicios" className="text-gray-500 hover:text-green-400 transition font-bebas text-lg">Servicios</a>
          </li>
          <li>
            <a href="#contacto" className="text-gray-500 hover:text-green-400 transition font-bebas text-lg">Contacto</a>
          </li>
        </ul>
        {/* Hamburger */}
        <button
          className="md:hidden text-gray-500 hover:text-green-400 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-neutral-800 border-t border-gray-700 px-6 pb-4">
          <a href="#productos" className="block py-2 text-gray-500 hover:text-green-400 font-bebas text-lg">Productos</a>
          <a href="#servicios" className="block py-2 text-gray-500 hover:text-green-400 font-bebas text-lg">Servicios</a>
          <a href="#contacto" className="block py-2 text-gray-500 hover:text-green-400 font-bebas text-lg">Contacto</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;