import React from "react";
import { useTranslation } from "react-i18next";
import CardSwap, { Card } from "./reactbits/CardSwap";

import infinitiImg from "../assets/infiniti_growth.png";
import dcodeImg from "../assets/Dcode.png";
import patronesImg from "../assets/Patrones.png";
import corporacionFontImg from "../assets/corporacion-font.jpg";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Proyecto Patrones",
      desc: t("projects.items.patrones.desc"),
      tech: "Unity · C# · Patrones de diseño",
      image: patronesImg,
    },
    {
      title: "Corporación Font",
      desc: t("projects.items.corporacionFont.desc"),
      tech: "LinxSphere · Power Automate · Power Apps · Copilot Studio",
      image: corporacionFontImg,
      imageClassName:
        "block w-full max-w-[460px] rounded bg-white px-4 sm:px-5 py-3 sm:py-4 object-contain",
    },
    {
      title: "DreamInCode",
      desc: t("projects.items.dream.desc"),
      tech: "IA · Node.js · Integraciones",
      image: dcodeImg,
    },
    {
      title: "Infinity Growth-UI",
      desc: t("projects.items.infinity.desc"),
      tech: "C# · .NET · SQL Server · UI",
      image: infinitiImg,
    },
  ];

  return (
    <section id="proyectos" className="projects-section scroll-mt-32 px-6 max-w-7xl mx-auto">

      <div className="relative min-h-0 md:min-h-[700px] overflow-visible">
        <div className="max-w-xl pt-16">
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-4">
          {t("projects.title")}
          </h2>

          <p className="text-white/70 text-base sm:text-lg leading-7">
            {t("projects.subtitle")}
          </p>
        </div>

        <CardSwap
          width={600}
          height={500}
          cardDistance={70}
          verticalDistance={80}
          delay={5000}
          pauseOnHover={false}
          skewAmount={6}
          easing="elastic"
        >
          {projects.map((project) => (
            <Card key={project.title}>
              <div className="h-full flex flex-col">
                <div className="h-40 sm:h-44 md:h-52 bg-black/60 border-b border-main/25 flex items-center justify-center p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={
                      project.imageClassName ||
                      "max-h-full max-w-full object-contain"
                    }
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs uppercase tracking-widest text-accent mb-3">
                    {t("projects.projectLabel")}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-main mb-3">
                    {project.title}
                  </h3>

                  <p className="text-white/75 text-base sm:text-lg leading-6 mb-4">
                    {project.desc}
                  </p>

                  <p className="text-accent text-sm leading-6 mt-auto break-words">
                    <strong className="text-white">
                      {t("projects.technologies")}
                    </strong>{" "}
                    {project.tech}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </CardSwap>
      </div>
    </section>
  );
};

export default Projects;
