import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Whatsapp from './Components/Whatsapp';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Navbar toggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <Whatsapp/>
      <main className="pt-16">
        <Home />
      </main>
    </div>
  );
}

export default App;

