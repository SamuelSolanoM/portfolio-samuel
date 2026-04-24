import React from "react";
import { FaDownload } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import cvPdf from "../assets/cv-samuel-solano-molina.pdf";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="inicio" className="max-w-6xl mx-auto px-6 pt-20 text-center">
      <h2 className="text-5xl font-bold mb-4 text-main">
        {t("hero.title")}
      </h2>

      <p className="text-white/75 max-w-2xl mx-auto mb-8">
        {t("hero.subtitle")}
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="#proyectos"
          className="inline-block bg-main text-white px-6 py-3 rounded-xl hover:bg-accent hover:text-black transition-all duration-300"
        >
          {t("hero.projectsButton")}
        </a>

        <a
          href={cvPdf}
          download="CV-Samuel-Solano-Molina.pdf"
          className="inline-flex items-center gap-2 border border-main text-main px-6 py-3 rounded-xl bg-transparent hover:bg-main hover:text-white hover:-translate-y-1 transition-all duration-300"
        >
          <FaDownload />
          {t("hero.cvButton")}
        </a>
      </div>
    </section>
  );
};

export default Hero;