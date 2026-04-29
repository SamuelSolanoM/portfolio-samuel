import React from "react";
import { FaDownload } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import cvPdf from "../assets/cv-samuel-solano-molina.pdf";
import BorderGlow from "./reactbits/BorderGlow";

const Hero = () => {
  const { t } = useTranslation();

  return (
      <section
      id="inicio"
      className="scroll-mt-32 max-w-7xl mx-auto px-6 pt-16 md:pt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      <div>

       <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Samuel Solano
          <br />
          Molina
        </h1>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-main mt-4 leading-tight">
        {t("hero.roleLine1")}
        <br />
        {t("hero.roleLine2")}
       </h2>

        <div className="mt-8 inline-block bg-main text-white font-bold px-5 sm:px-6 py-3 rounded-xl shadow-[0_0_25px_rgba(28,142,166,0.35)] text-sm sm:text-base">
        {t("hero.phrase")}
        </div>
      </div>

      <BorderGlow
      edgeSensitivity={10}
      glowColor="192 40 69"
      backgroundColor="#061014"
      borderRadius={24}
      glowRadius={30}
      glowIntensity={1.4}
      coneSpread={35}
      animated={false}
      colors={["#1C8EA6", "#8EC3D1", "#1C8EA6"]}
      fillOpacity={0.35}
    >
      <div className="rounded-3xl p-8">
        <h3 className="text-4xl font-bold text-main mb-4">
          {t("about.title")}
        </h3>

        <p className="text-white/80 text-lg leading-8">
          {t("about.text")}
        </p>
      </div>
    </BorderGlow>
    </section>
  );
};

export default Hero;