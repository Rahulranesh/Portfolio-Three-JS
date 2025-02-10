import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <section id="about" className="py-12 px-6">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show">
        <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px] text-center"
      >
        I am Ranesh S, a Flutter Developer and AWS DevOps Engineer, currently pursuing my B.E. in Computer Science Engineering at GCT Coimbatore...
      </motion.p>
    </section>
  );
};

export default SectionWrapper(About, "about");
