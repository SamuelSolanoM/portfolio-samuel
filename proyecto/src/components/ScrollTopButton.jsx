import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 250);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border border-main/30 bg-black/80 text-main hover:bg-main hover:text-white transition-all duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <FaArrowUp className="mx-auto" />
    </button>
  );
};

export default ScrollTopButton;