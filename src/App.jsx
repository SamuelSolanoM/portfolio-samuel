import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="overflow-x-hidden space-y-10">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="text-center py-6 text-sm text-gray-400 border-t border-gray-800 mt-12">
        © {new Date().getFullYear()} Samuel Solano Molina — Todos los derechos reservados.
      </footer>
    </div>
  );
}
