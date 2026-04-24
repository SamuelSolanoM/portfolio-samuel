import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollTopButton from "./components/ScrollTopButton";
import LottieSection from "./components/LottieSection";

function App() {
  const { t } = useTranslation();

  return (
    <div className="bg-base text-white min-h-screen">
      <Navbar />
      <main className="space-y-24 pb-20">
        <Hero />
        <LottieSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-main/20 text-center py-6 text-white/70 bg-black">
        {t("footer.text")}
      </footer>

      <WhatsAppButton />
      <ScrollTopButton />
    </div>
  );
}

export default App;