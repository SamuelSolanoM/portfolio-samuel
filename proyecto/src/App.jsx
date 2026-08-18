import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollTopButton from "./components/ScrollTopButton";
import WorkSkills from "./components/WorkSkills";
import Curriculum from "./components/Curriculum";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import favicon from "./assets/favicon.png";

function App() {
  const { t } = useTranslation();

  return (
    <div className="bg-base text-white min-h-screen">
      <Navbar />
      <main className="space-y-24 pb-20">
        <Hero />
        <WorkSkills />
        <Projects />
        <Curriculum />
        <Contact />
      </main>

     <footer className="border-t border-main/20 bg-black py-10">
      <div className="max-w-7xl mx-auto px-6 flex justify-center">
        <div className="flex items-center gap-5 sm:gap-8 border border-main/30 rounded-2xl px-6 sm:px-10 py-5 sm:py-6 bg-white/5">
          <img
            src={favicon}
            alt="Logo Samuel Solano"
            className="w-12 h-12 object-contain"
          />

          <div className="h-12 w-px bg-white/20"></div>

          <a
            href="https://www.linkedin.com/in/samuel-solano-a22a33312/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-main hover:text-accent hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://github.com/SamuelSolanoM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-accent hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </div>
    </footer>

      <WhatsAppButton />
      <ScrollTopButton />
    </div>
  );
}

export default App;
