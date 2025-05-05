import React from 'react';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <button onClick={toggle} className="absolute top-4 right-4">
        ✕
      </button>
      <nav className="mt-16">
        <ul>
          <li className="p-4 hover:bg-gray-200"><a href="#modelos">Modelos</a></li>
          <li className="p-4 hover:bg-gray-200"><a href="#tecnologia">Tecnología</a></li>
          <li className="p-4 hover:bg-gray-200"><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
