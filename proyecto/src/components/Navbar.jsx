import React from "react";
import { useTranslation } from "react-i18next";
import favicon from "../assets/favicon.png";
import PillNav from "./reactbits/PillNav";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  const items = [
    { label: t("navbar.home"), href: "#inicio" },
    { label: t("navbar.skills"), href: "#skills" },
    { label: t("navbar.projects"), href: "#proyectos" },
    { label: t("navbar.contact"), href: "#contacto" },
    { label: t("navbar.switch"), href: "#idioma", action: "language" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/90 border-b border-main/20 backdrop-blur h-28">
      <nav className="max-w-7xl mx-auto px-8 h-28 flex items-center justify-between">
        <PillNav
        logo={favicon}
        logoAlt="Samuel Solano Logo"
        items={items}
        activeHref="#inicio"
        className="custom-pill-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#061014"
        hoveredPillTextColor="#000000"
        pillTextColor="#ffffff"
        initialLoadAnimation={false}
        onLanguageClick={changeLanguage}
        onMobileMenuClick={() => {}}
      />

      </nav>
    </header>
  );
};

export default Navbar;