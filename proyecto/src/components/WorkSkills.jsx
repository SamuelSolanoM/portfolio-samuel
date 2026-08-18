import React, { useState } from "react";
import BorderGlow from "./reactbits/BorderGlow";
import "./reactbits/BorderGlow.css";
import { useTranslation } from "react-i18next";




const skills = [
  "Java",
  "C#",
  ".NET",
  "ASP.NET",
  "Angular",
  "React",
  "SQL",
  "SQL Server",
  "Node.js",
  "JavaScript",
  "HTML",
  "CSS",
  "MongoDB",
  "Python",
  "Azure",
  "Unity",
  "Tailwind",
  "Git",
  "GitHub",
  "REST API",
  "Entity Framework",
  "UI/UX Design",
];

const WorkSkills = () => {
  const { t } = useTranslation(); 

  const [activeStep, setActiveStep] = useState(0);

  const steps = [
  {
    number: "1",
    title: t("workSteps.step1Title"),
    text: t("workSteps.step1Text"),
  },
  {
    number: "2",
    title: t("workSteps.step2Title"),
    text: t("workSteps.step2Text"),
  },
  {
    number: "3",
    title: t("workSteps.step3Title"),
    text: t("workSteps.step3Text"),
  },
  {
    number: "4",
    title: t("workSteps.step4Title"),
    text: t("workSteps.step4Text"),
  },
];

  return (
    <section
    id="skills"
    className="scroll-mt-32 max-w-7xl mx-auto px-6 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start overflow-hidden"
  >
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
          {t("work.title")}
        </h2>

        <p className="text-white/80 leading-7 text-lg mb-10 max-w-xl">
          {t("work.description")}
          <br />
           {t("work.description2")}
            <br />
           {t("work.description3")}
        </p>

        <div className="flex flex-wrap gap-4 sm:gap-6 mb-8">
          {steps.map((step, index) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(index)}
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full font-bold text-base sm:text-lg transition-all duration-300 ${
                activeStep === index
                  ? "bg-accent text-black scale-110"
                  : "bg-white/20 text-white  hover:bg-main"
              }`}
            >
              {step.number}
            </button>
          ))}
        </div>

        <BorderGlow
        className="w-full max-w-[520px]"
        edgeSensitivity={10}
        glowColor="192 40 69"
        backgroundColor="#061014"
        borderRadius={18}
        glowRadius={28}
        glowIntensity={1.4}
        coneSpread={35}
        animated={false}
        colors={["#1C8EA6", "#8EC3D1", "#1C8EA6"]}
        fillOpacity={0.35}
      >
       <div className="rounded-2xl p-5 sm:p-6 w-full text-white">
          <h3 className="text-2xl sm:text-3xl font-bold text-main mb-4">
            {steps[activeStep].title}
          </h3>

          <p className="text-white/80 text-base sm:text-lg leading-7">
            {steps[activeStep].text}
          </p>
        </div>
      </BorderGlow>
      </div>
      <div>
        <h2 className="section-title text-4xl sm:text-5xl font-bold mb-10 text-center lg:text-left">
          {t("skills.title")}
        </h2>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          {skills.map((skill) => (
            <BorderGlow
              key={skill}
              edgeSensitivity={10}
              glowColor="192 40 69"
              backgroundColor="#061014"
              borderRadius={14}
              glowRadius={22}
              glowIntensity={1.4}
              coneSpread={35}
              animated={false}
              colors={["#1C8EA6", "#8EC3D1", "#1C8EA6"]}
              fillOpacity={0.45}
            >
              <div className="px-4 sm:px-5 py-3 min-w-[84px] text-center !text-white font-semibold rounded-xl text-sm sm:text-base">
                {skill}
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSkills;
