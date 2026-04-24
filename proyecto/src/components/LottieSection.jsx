import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/developer-animation.json";

const LottieSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 flex justify-center">
      <div className="w-96 md:w-[520px] lg:w-[650px] hover:scale-105 transition-transform duration-300">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </section>
  );
};

export default LottieSection;