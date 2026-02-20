import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => (
  <section id="contacto" className="py-20 px-6 max-w-4xl mx-auto text-center">
    
    <motion.h2
      className="text-4xl font-bold mb-6 text-secondary"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      Contacto
    </motion.h2>

    <p className="text-primary/80 mb-6">
      Puedes contactarme a través de mis redes:
    </p>

    <div className="flex justify-center gap-8 text-3xl text-primary mt-4">
      
      <a
        href="mailto:ssolano1505@gmail.com"
        className="hover:text-secondary hover:scale-110 transition-transform duration-300"
      >
        <FaEnvelope />
      </a>

      <a
        href="https://github.com/SamuelSolanoM"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-secondary hover:scale-110 transition-transform duration-300"
      >
        <FaGithub />
      </a>

    </div>
  </section>
);

export default Contact;