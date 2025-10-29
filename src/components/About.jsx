import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/about-me.svg";

const About = () => (
  <section id="sobremí" className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    <motion.img
      src={aboutImg}
      alt="Sobre mí"
      className="rounded-2xl shadow-lg w-55 md:w-66 mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-3 text-indigo-400">Sobre mí</h2>
      <p className="text-gray-400 italic mb-4">Desarrollador apasionado por la tecnología y el diseño.</p>
      <p className="text-gray-300 text-lg leading-relaxed">
        Soy un estudiante de Ingeniería en Software con pasión por el desarrollo web, backend y el diseño de interfaces.
        Me gusta combinar la tecnología con la creatividad para crear soluciones eficientes y elegantes.
      </p>
    </motion.div>
  </section>
);

export default About;
