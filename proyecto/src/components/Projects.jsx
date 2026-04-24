import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import infinitiImg from "../assets/infiniti_growth.png";
import dcodeImg from "../assets/Dcode.png";
import patronesImg from "../assets/Patrones.png";
import pokemonImg from "../assets/pokemon.png";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState(t("projects.all"));
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Infinity Growth-UI",
      desc: t("projects.items.infinity.desc"),
      tech: "C# .NET, SQL Server, UI",
      category: t("projects.items.infinity.category"),
      image: infinitiImg,
    },
    {
      title: "DreamInCode",
      desc: t("projects.items.dream.desc"),
      tech: "IA, Node.js, Integraciones",
      category: t("projects.items.dream.category"),
      image: dcodeImg,
    },
    {
      title: "Proyecto Patrones",
      desc: t("projects.items.patrones.desc"),
      tech: "Unity, C#, Patrones de diseño",
      category: t("projects.items.patrones.category"),
      image: patronesImg,
    },
    {
      title: "Pokemon Fight",
      desc: t("projects.items.pokemon.desc"),
      tech: "Node.js, MongoDB, JavaScript",
      category: t("projects.items.pokemon.category"),
      image: pokemonImg,
    },
  ];

  const filters = [
    t("projects.all"),
    t("projects.individual"),
    t("projects.group"),
  ];

  useEffect(() => {
    setActiveFilter(t("projects.all"));
  }, [i18n.language, t]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === t("projects.all")) return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects, t]);

  return (
    <section id="proyectos" className="px-6 max-w-6xl mx-auto text-center">
      <h2 className="section-title text-3xl font-bold mb-4">
        {t("projects.title")}
      </h2>

      <p className="text-white/75 max-w-2xl mx-auto mb-8">
        {t("projects.subtitle")}
      </p>

      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full border transition-all duration-300 ${
              activeFilter === filter
                ? "bg-main text-white border-main"
                : "border-main/40 text-white/80 hover:bg-accent hover:text-black"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((p) => (
          <article
            key={p.title}
            onMouseEnter={() => setHoveredProject(p.title)}
            onMouseLeave={() => setHoveredProject(null)}
            className="glass-card rounded-2xl border border-main/20 p-6 text-left hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 overflow-hidden"
          >
            <span className="text-xs uppercase tracking-widest text-accent mb-2 block">
              {p.category}
            </span>

            <h3 className="text-xl font-semibold text-main mb-2">
              {p.title}
            </h3>

            <p className="text-white/75 text-sm leading-relaxed mb-3">
              {p.desc}
            </p>

            <p className="text-accent text-sm mb-4">
              <strong className="text-white">
                {t("projects.technologies")}
              </strong>{" "}
              {p.tech}
            </p>

            <div
              className={`transition-all duration-500 ease-in-out ${
                hoveredProject === p.title
                  ? "max-h-72 opacity-100 scale-100 mt-4"
                  : "max-h-0 opacity-0 scale-95 mt-0"
              }`}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-contain rounded-xl border border-main/20 bg-black/40"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;