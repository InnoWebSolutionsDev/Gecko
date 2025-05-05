import React from 'react';
import logo from '../assets/logo.png';

const parrafos = [
  "Gecko Technology SAS es una empresa con más de 10 años de trayectoria, creada y orientada a la solución óptima y confiable en sistemas de automatización, seguridad electrónica y desarrollo.",
  "Se caracteriza por el compromiso con la calidad de sus servicios y la asesoría continua que garantiza que la elección de nuestros clientes sea la más acorde a sus necesidades.",
  "Nuestro trabajo se respalda en la excelencia de cada uno de nuestros procesos, la cual se ha venido adquiriendo día a día en el logro de metas trazadas, que ha sido la base para generar confianza a cada uno de nuestros clientes en diferentes sectores de Colombia."
];

const SobreLaEmpresa = () => {
  return (
    <section className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center px-4">
      <img
        src={logo}
        alt="Logo Gecko"
        className="h-24 mb-8 animate-fade-in"
        style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
      />
      <div className="max-w-2xl flex flex-col gap-4">
        {parrafos.map((texto, idx) => (
          <p
            key={idx}
            className="text-gray-300 text-center text-lg font-light animate-slide-up opacity-0"
            style={{
              animationDelay: `${0.5 + idx * 0.5}s`,
              animationFillMode: 'forwards'
            }}
          >
            {texto}
          </p>
        ))}
      </div>
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-in;
          }
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-slide-up {
            animation: slide-up 1.2s cubic-bezier(.4,0,.2,1) forwards;
          }
        `}
      </style>
    </section>
  );
};

export default SobreLaEmpresa;