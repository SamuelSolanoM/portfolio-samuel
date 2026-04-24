import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="sobre-mi" className="max-w-5xl mx-auto px-6">
      <h2 className="section-title text-3xl font-bold mb-6 text-center">
        {t("about.title")}
      </h2>
      <div className="glass-card rounded-2xl p-6 border border-main/20">
        <p className="text-white/80 leading-7">
          {t("about.text")}
        </p>
      </div>
    </section>
  );
};

export default About;