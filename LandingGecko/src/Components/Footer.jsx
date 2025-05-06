import React from "react";
import logo from "../assets/logo.png";

const Footer = () => (
  <footer className="bg-gray-100 border-t border-gray-700 py-6">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
      <img src={logo} alt="Logo Gecko" className="h-10 mb-4 md:mb-0" />
      <ul className="flex space-x-8 font-bebas text-lg">
        <li>
          <a href="#politicas" className="text-gray-500 hover:text-green-400 transition">Políticas de Privacidad</a>
        </li>
        <li>
          <a href="#contacto" className="text-gray-500 hover:text-green-400 transition">Contacto</a>
        </li>
      </ul>
      <span className="text-gray-600 text-sm mt-4 md:mt-0">&copy; {new Date().getFullYear()} Gecko Technology SAS</span>
    </div>
  </footer>
);

export default Footer;