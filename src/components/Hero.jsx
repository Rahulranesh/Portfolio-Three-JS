import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col">
      {/* Hero Text */}
      <div className="flex flex-col items-center justify-center px-6 sm:px-16 py-8 z-10" style={{ height: "40vh" }}>
        <h1 className={`${styles.heroHeadText} text-white text-center`}>
          Hi, I'm <span className="text-[#915EFF]">Ranesh</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100 text-center`}>
          I develop Mobile Apps built on Flutter & AWS
        </p>
      </div>
      {/* 3D Model */}
      <div className="w-full" style={{ height: "60vh" }}>
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
