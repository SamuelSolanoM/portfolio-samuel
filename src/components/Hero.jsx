import React from "react";
import { motion } from "framer-motion";
import devImg from "../assets/dev-ilustration.svg";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 px-8">
      <motion.img
        src={devImg}
        alt="Desarrollador"
        className="w-70 md:w-80 drop-shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hola, soy <span className="text-indigo-400">Samuel Solano Molina</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-md">
          Estudiante de Ingeniería en Software apasionado por crear soluciones web innovadoras y funcionales.
        </p>
        <a href="#proyectos" className="mt-6 inline-block px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-all">
          Ver mis proyectos
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
