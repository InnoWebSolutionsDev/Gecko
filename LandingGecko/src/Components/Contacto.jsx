import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Corrige el icono de los marcadores de leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const puntos = [
  {
    position: [4.7328, -74.0456],
    label: "Oficina Principal: Bogotá cr 15#154-49",
  },
  {
    position: [4.710989, -74.072092],
    label: "Zona de referencia 1",
  },
  {
    position: [4.748477, -74.100367],
    label: "Zona de referencia 2",
  },
];

const Contacto = () => (
  <section id="contacto" className="bg-neutral-900 min-h-screen flex flex-col justify-center items-center py-16">
    
    <div className="w-11/12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Formulario */}
      <form className="bg-neutral-800 border border-gray-700 rounded-xl p-8 flex flex-col gap-4 shadow-lg">
        <input
          type="text"
          placeholder="Nombre"
          className="bg-neutral-900 border border-gray-700 rounded px-4 py-2 text-gray-200 focus:outline-none focus:border-green-500"
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="bg-neutral-900 border border-gray-700 rounded px-4 py-2 text-gray-200 focus:outline-none focus:border-green-500"
          required
        />
        <textarea
          placeholder="Comentario"
          rows={5}
          className="bg-neutral-900 border border-gray-700 rounded px-4 py-2 text-gray-200 focus:outline-none focus:border-green-500"
          required
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-500 text-white font-bebas rounded py-2 mt-2 transition"
        >
          Enviar
        </button>
      </form>
      {/* Mapa */}
      <div className="h-96 w-full rounded-xl overflow-hidden border border-gray-700">
        <MapContainer
          center={[4.7328, -74.0456]}
          zoom={12}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {puntos.map((p, idx) => (
            <Marker key={idx} position={p.position}>
              <Popup>{p.label}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  </section>
);

export default Contacto;