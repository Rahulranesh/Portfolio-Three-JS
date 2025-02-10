import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-16">
      <motion.div className="z-10 text-center">
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className="text-[#915EFF]">Ranesh</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I develop Mobile Apps built on Flutter & AWS
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
