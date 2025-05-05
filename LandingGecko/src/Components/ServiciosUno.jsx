import React from "react";

const ServiciosUno = () => (
  <section
    id="servicios-uno"
    className="w-full bg-neutral-900 flex items-center justify-center py-8"
  >
    <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-700 mx-4">
      <video
        className="w-full h-full object-cover"
        src="/servicios/1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  </section>
);

export default ServiciosUno;