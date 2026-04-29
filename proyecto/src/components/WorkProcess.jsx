import React, { useState } from "react";

const steps = [
  {
    number: "1",
    title: "Descubrimiento y planificación",
    text: "Analizo las necesidades, objetivos y alcance del proyecto para definir una ruta clara antes de iniciar el desarrollo.",
  },
  {
    number: "2",
    title: "Diseño y desarrollo",
    text: "Creo soluciones atractivas y funcionales, manteniendo una comunicación constante para asegurar que el diseño refleje la visión del proyecto.",
  },
  {
    number: "3",
    title: "Pruebas y mejoras",
    text: "Reviso la funcionalidad, experiencia de usuario y rendimiento para corregir detalles y optimizar la solución.",
  },
  {
    number: "4",
    title: "Entrega y seguimiento",
    text: "Presento el resultado final y brindo recomendaciones para mantener, escalar o mejorar el proyecto en el futuro.",
  },
];

const WorkProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <h2 className="text-5xl font-bold mb-6 text-white">¿Cómo trabajo?</h2>

        <p className="text-white/80 leading-7 mb-10 max-w-xl">
          Sigo un proceso claro y estructurado para transformar una idea en una solución funcional, cuidando tanto la lógica del desarrollo como la experiencia del usuario.
        </p>

        <div className="flex gap-6 mb-8">
          {steps.map((step, index) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(index)}
              className={`w-14 h-14 rounded-full font-bold text-lg transition-all duration-300 ${
                activeStep === index
                  ? "bg-accent text-black scale-110"
                  : "bg-white/20 text-white hover:bg-main"
              }`}
            >
              {step.number}
            </button>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-main mb-4">
            {steps[activeStep].title}
          </h3>
          <p className="text-white/80 leading-7">
            {steps[activeStep].text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;