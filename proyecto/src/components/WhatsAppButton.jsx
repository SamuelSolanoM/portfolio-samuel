import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phone = "71983433";
  const message = encodeURIComponent("Hola Samuel, vi tu portafolio y me gustaría obtener más información.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-main text-white shadow-lg hover:bg-accent hover:text-black transition-all duration-300"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default WhatsAppButton;
