import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <ul className="flex space-x-8 justify-end flex-1">
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
  </div>
</nav>
  );
};

export default Navbar;