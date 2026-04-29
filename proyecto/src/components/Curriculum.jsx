import React from "react";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import cvPdf from "../assets/cv-samuel-solano-molina.pdf";
import { useTranslation } from "react-i18next";

const Curriculum = () => {
  const { t } = useTranslation(); 

  return (
    <section
    id="curriculum"
    className="max-w-7xl mx-auto px-6 pt-40 pb-28"
    >
      <div className="grid lg:grid-cols-2 gap-14 items-start">

        {/* IZQUIERDA */}
        <div>
          <h2 className="text-5xl font-bold text-main mb-6">
            {t("curriculum.title")}
          </h2>

          <p className="text-white/80 leading-8 text-lg mb-8 max-w-xl">
           {t("curriculum.description")}
          </p>

          <div className="rounded-3xl overflow-hidden border-2 border-white shadow-[0_0_30px_rgba(255,255,255,0.08)]">
            <iframe
            src={`${cvPdf}#toolbar=1&navpanes=0&scrollbar=1&zoom=page-width`}
            title="CV Samuel Solano"
            className="w-full h-[720px] bg-white"
            />
          </div>
        </div>

        {/* DERECHA */}
        <div className="pt-10">

          <div className="glass-card rounded-3xl p-8 border border-main/20">
            <h3 className="text-2xl font-bold text-main mb-6">
              {t("curriculum.summaryTitle")}
            </h3>

            <ul className="space-y-4 text-white/85 leading-7">
            <li>✓ {t("curriculum.item1")}</li>
            <li>✓ {t("curriculum.item2")}</li>
            <li>✓ {t("curriculum.item3")}</li>
            <li>✓ {t("curriculum.item4")}</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href={cvPdf}
              download="CV-Samuel-Solano-Molina.pdf"
              className="bg-main text-white px-7 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
            >
              <FaDownload />
             {t("curriculum.download")}
            </a>

            <a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-main text-main px-7 py-4 rounded-xl font-semibold hover:bg-main hover:text-white transition-all duration-300 inline-flex items-center gap-3"
            >
              <FaExternalLinkAlt />
              {t("curriculum.open")}
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;