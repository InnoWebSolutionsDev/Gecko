import { FiPackage, FiTool, FiPhone } from "react-icons/fi";
import { useState } from "react";

const SidebarItem = ({ icon, label, href }) => {
  const [hovered, setHovered] = useState(false);

  return (
    // Contenedor siempre con ancho máximo, no cambia
    <div
      className="relative w-64" // Ancho fijo máximo
      style={{ minHeight: "56px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a
        href={href}
        className={`absolute right-0 flex items-center justify-end bg-neutral-900 text-white rounded-l-full overflow-hidden shadow-md border-l-4 transition-all duration-300
          ${hovered ? "w-full border-green-500 pl-4 pr-4" : "w-16 border-transparent pl-0 pr-4"} // Cambia pr-0 a pr-4 aquí
          py-4
        `}
        style={{ minHeight: "56px" }}
      >
        {/* Ícono siempre visible */}
        <span className="text-xl flex-shrink-0">{icon}</span>
        {/* Texto solo visible y posicionado cuando está hovered */}
        {hovered && (
          <span
            className="ml-4 font-bebas text-lg tracking-wide opacity-100 transition-opacity duration-300 whitespace-nowrap"
          >
            {label}
          </span>
        )}
      </a>
    </div>
  );
};

const SidebarMenu = () => (
  <div className="fixed top-36 right-0 z-50 flex flex-col items-end gap-4"> {/* Alinea items a la derecha */}
    <SidebarItem
      icon={<FiPackage size={24} className="opacity-60" />}
      label="Productos"
      href="#productos"
    />
    <SidebarItem
      icon={<FiTool size={24} className="opacity-70" />}
      label="Servicios"
      href="#servicios"
    />
    <SidebarItem
      icon={<FiPhone size={24} className="opacity-70" />}
      label="Contacto"
      href="#contacto"
    />
  </div>
);

export default SidebarMenu;