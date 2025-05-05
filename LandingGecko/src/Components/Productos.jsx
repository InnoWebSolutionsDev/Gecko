import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Ejemplo de productos
const productos = [
  {
    img: "/productos/1.png",
    titulo: "Cámara IP",
    desc: "Vigilancia en alta definición y acceso remoto.",
  },
  {
    img: "/productos/2.png",
    titulo: "Alarma Inteligente",
    desc: "Protección avanzada con notificaciones en tiempo real.",
  },
  {
    img: "/productos/3.png",
    titulo: "Control de Acceso",
    desc: "Gestión segura de entradas y salidas.",
  },
  {
    img: "/productos/4.png",
    titulo: "Cercos Eléctricos",
    desc: "Disuasión perimetral de alta eficacia.",
  },
  {
    img: "/productos/5.png",
    titulo: "Videoportero",
    desc: "Identificación visual y apertura remota.",
  },
];

const Productos = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="productos"
      className="bg-neutral-900 min-h-screen flex flex-col justify-center"
    >
      
      <div className="w-11/12 max-w-7xl mx-auto">
        <Slider {...settings}>
        {productos.map((prod, idx) => (
  <div key={idx} className="px-3">
    <div className="bg-neutral-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg flex flex-col items-center p-4 h-140">
      <h3 className="text-xl font-bebas text-green-500 mb-2">{prod.titulo}</h3>
      <p className="text-gray-400 text-center mb-4">{prod.desc}</p>
      <div className="w-full h-60 overflow-hidden rounded-md group flex items-center justify-center mt-auto">
        <img
          src={prod.img}
          alt={prod.titulo}
          className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  </div>
))}
        </Slider>
      </div>
    </section>
  );
};

export default Productos;