import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
  // Check if the device width is less than 640px (Tailwind's "sm" breakpoint)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    // Set initial value
    setIsMobile(mediaQuery.matches);
    // Update state on change
    const handler = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col">
      {/* Hero Text Section */}
      <div
        className="flex flex-col items-center justify-center px-6 sm:px-16 py-8 z-10"
        style={{ height: "40vh" }}
      >
        <h1 className={`${styles.heroHeadText} text-white text-center`}>
          Hi, I'm <span className="text-[#915EFF]">Ranesh</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100 text-center`}>
          I develop Mobile Apps built on Flutter & AWS
        </p>
      </div>
      {/* 3D Model Section (only for non-mobile devices) */}
      {!isMobile && (
        <div className="w-full" style={{ height: "60vh" }}>
          <ComputersCanvas />
        </div>
      )}
    </section>
  );
};

export default Hero;
