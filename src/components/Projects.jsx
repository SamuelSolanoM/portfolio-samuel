import React from "react";
import { motion } from "framer-motion";
import infinity from "../assets/projects_infinity.svg";
import dcode from "../assets/dreamInCode.svg";
import patrones from "../assets/proyecto_patrones_dark.svg";
import pokemon from "../assets/pokemon_fight.svg";


const projects = [
  { title: "Infinity Growth-UI",
    link: "https://github.com/SamuelSolanoM/InfinityGrowth-UI.git",
    desc: "Proyecto en C# .NET y SQL Server sobre inversión en la bolsa de valores.",
    image: infinity },
  { title: "DreamInCode",
    link: "https://github.com/DreamInCode-CR/DreamInCode-MCP.git",
    desc: "Asistente de voz con IA orientado a adultos mayores.",
    image: dcode },
  { title: "Proyecto Patrones",
    link: "https://github.com/ECF2001/ProyectoPatrones.git",
    desc: "Juego procedural en Unity C# aplicando patrones de diseño.",
    image: patrones },
  { title: "Pokemon Fight",
    link: "https://github.com/SamuelSolano15/Pokemon_Fight",
    desc: "Juego de batalla en Node.js y MongoDB.",
    image: pokemon }
];

const Projects = () => (
  <section id="proyectos" className="py-20 px-6 max-w-6xl mx-auto text-center">
    <motion.h2 className="text-3xl font-bold mb-10 text-indigo-400" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}>
      Proyectos
    </motion.h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((p, i) => (
    <motion.div
      key={i}
      className="bg-gray-900/80 p-6 rounded-2xl border border-gray-800 hover:border-indigo-400 transition-all flex flex-col justify-between items-center h-[420px]"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col items-center">
        <img
          src={p.image}
          alt={p.title}
          className="rounded-xl mb-4 w-full max-h-56 object-contain bg-gray-950 p-4"
        />
        <h3 className="text-xl font-semibold text-indigo-400 mb-2">{p.title}</h3>
        <p className="text-gray-300 text-sm mb-4 text-center">{p.desc}</p>
      </div>
      <a
        href={p.link}
        target="_blank"
        rel="noreferrer"
        className="text-indigo-400 hover:text-indigo-300 mt-auto"
      >
        Ver en GitHub →
      </a>
    </motion.div>
  ))}
</div>
  </section>
);

export default Projects;
