import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => (
  <section id="contacto" className="py-20 px-6 max-w-4xl mx-auto text-center">
    <motion.h2 className="text-3xl font-bold mb-6 text-indigo-400" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}>
      Contacto
    </motion.h2>
    <p className="text-gray-300 mb-6">Puedes contactarme a través de mis redes:</p>
    <div className="flex justify-center gap-8 text-3xl text-indigo-400 mt-4">
      <a href="mailto:ssolano1505@gmail.com" className="hover:text-indigo-300 hover:scale-110 transition-transform"><FaEnvelope /></a>
      <a href="https://github.com/SamuelSolanoM" target="_blank" className="hover:text-indigo-300 hover:scale-110 transition-transform"><FaGithub /></a>
    </div>
  </section>
);

export default Contact;
