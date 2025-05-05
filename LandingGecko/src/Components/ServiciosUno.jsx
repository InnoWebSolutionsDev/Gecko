import React from "react";

const ServiciosUno = () => (
  <section id="servicios-uno" className="w-full h-screen bg-neutral-900 flex items-center justify-center overflow-hidden">
    <video
      className="w-full h-full object-cover"
      src="/servicios/1.mp4" 
      autoPlay
      loop
      muted
      playsInline
    />
  </section>
);

export default ServiciosUno;