import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Java","C#",".NET","Angular","SQL","Node.js","JavaScript",
  "HTML","CSS","MongoDB","UI/UX Design","Python","Azure","Unity","Tailwind"
];

const Skills = () => (
  <section id="habilidades" className="py-20 px-6 max-w-6xl mx-auto text-center">
    <motion.h2 className="text-3xl font-bold mb-10 text-indigo-400" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}>
      Habilidades
    </motion.h2>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, i) => (
        <motion.span key={i}
          className="px-5 py-2 bg-gray-800/80 border border-gray-700 rounded-full text-gray-200 hover:bg-indigo-500 hover:text-white transition-all shadow-sm"
          whileHover={{ scale: 1.1 }}
        >{skill}</motion.span>
      ))}
    </div>
  </section>
);

export default Skills;
