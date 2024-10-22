import React from 'react';
import { motion } from 'framer-motion'; // Ensure this is imported
import { styles } from '../styles'; // Ensure styles file exists
import { fadeIn, textVariant } from '../utils/motion'; // Import animations
import { services } from '../constants';
import { Tilt } from 'react-tilt';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)} 
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img 
            src={icon} 
            alt={title} 
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)} 
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a Flutter developer with extensive experience in building high-quality, cross-platform mobile applications. 
        I specialize in creating intuitive user interfaces and seamless user experiences. My expertise includes 
        state management, RESTful API integration, and using various third-party packages to enhance app functionality. 
        I am passionate about delivering efficient, scalable, and maintainable code, and I thrive on collaborating with 
        teams to bring innovative ideas to life.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default About;
