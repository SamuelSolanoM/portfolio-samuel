import React from "react";
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

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="section-title text-3xl font-bold mb-8">
        {t("skills.title")}
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-5 py-3 rounded-xl border border-main/30 bg-[#111827] text-white hover:bg-accent hover:text-black hover:-translate-y-1 transition-all duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;