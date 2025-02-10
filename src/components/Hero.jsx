import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col">
      {/* Top Section: Hero Text */}
      <div className="flex flex-col justify-center items-center px-6 sm:px-16 z-10 h-[40vh]">
        <h1 className={`${styles.heroHeadText} text-white text-center`}>
          Hi, I'm <span className="text-[#915EFF]">Ranesh</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100 text-center`}>
          I develop Mobile Apps built on Flutter & AWS
        </p>
      </div>
      {/* Bottom Section: 3D Computer Model */}
      <div className="w-full h-[60vh]">
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
