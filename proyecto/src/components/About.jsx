import React from "react";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import softwareAnimation from "../assets/software-animation2.json";

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

      <div className="flex justify-center mt-10">
        <div className="w-60 md:w-[480px] lg:w-[500px] hover:scale-105 transition-transform duration-300">
          <Lottie animationData={softwareAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default About;