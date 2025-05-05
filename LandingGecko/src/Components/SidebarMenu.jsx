import { FiPackage, FiTool, FiPhone } from "react-icons/fi";
import { useState } from "react";

const menuItems = [
  { id: "productos", label: "Productos", icon: <FiPackage size={36} className="opacity-70" /> },
  { id: "servicios", label: "Servicios", icon: <FiTool size={36} className="opacity-70" /> },
  { id: "contacto", label: "Contacto", icon: <FiPhone size={36} className="opacity-70" /> },
];

const SidebarMenu = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="fixed top-36 right-0 z-50 flex flex-col gap-8 pointer-events-auto">
      {menuItems.map((item, idx) => {
        const isActive = hovered === idx;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className={`flex items-center justify-end pr-4 transition-all duration-300 overflow-hidden bg-neutral-900 text-gray-200 rounded-l-full border-l-4 shadow-lg
              ${isActive ? "w-64 border-green-500" : "w-20 border-transparent"}
            `}
            style={{ minHeight: "72px" }}
          >
            <span className="mr-3 flex-shrink-0">{item.icon}</span>
            <span
              className={`transition-all duration-300 text-xl font-bebas tracking-wide whitespace-nowrap
                ${isActive ? "opacity-100 ml-2" : "opacity-0 w-0 ml-0"}
              `}
              style={{
                display: isActive ? "inline" : "none"
              }}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default SidebarMenu; //no se sube
