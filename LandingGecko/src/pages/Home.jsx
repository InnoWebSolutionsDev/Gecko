import React from 'react'
import Slider from "../Components/Slider";
import Productos from "../Components/Productos";
import ServiciosUno from '../Components/ServiciosUno';
import ServiciosDos from '../Components/ServiciosDos';
import SobreLaEmpresa from '../Components/SobreLaEmpresa'
import Contacto from '../Components/Contacto';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
    <Slider />
    <Productos />
    <ServiciosUno />
    <SobreLaEmpresa/>
    <ServiciosDos />
    <Contacto />
    <Footer />
    </>
  )
}

export default Home