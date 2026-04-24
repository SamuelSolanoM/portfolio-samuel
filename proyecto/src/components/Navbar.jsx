import React from "react";
import favicon from "../assets/favicon.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  return (
    <header className="sticky top-0 z-40 bg-black/90 border-b border-main/20 backdrop-blur">
      <nav className="w-full px-8 py-4 flex items-center justify-between w-full">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={favicon}
            alt="Logo"
            className="w-10 h-10 object-contain rounded-md"
          />
          <h1 className="text-main font-bold text-xl whitespace-nowrap">
            Samuel Solano
          </h1>
        </a>

        <div className="flex items-center gap-6 text-sm ml-auto">
          <a href="#inicio" className="hover:text-accent transition-colors">
            {t("navbar.home")}
          </a>
          <a href="#sobre-mi" className="hover:text-accent transition-colors">
            {t("navbar.about")}
          </a>
          <a href="#skills" className="hover:text-accent transition-colors">
            {t("navbar.skills")}
          </a>
          <a href="#proyectos" className="hover:text-accent transition-colors">
            {t("navbar.projects")}
          </a>
          <a href="#contacto" className="hover:text-accent transition-colors">
            {t("navbar.contact")}
          </a>

          <button
            onClick={changeLanguage}
            className="px-4 py-2 rounded-full border border-main text-main hover:bg-main hover:text-white transition-all duration-300"
          >
            {t("navbar.switch")}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;