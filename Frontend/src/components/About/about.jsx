"use client";
import { textContainer, textVariant2 } from "../Tracks/motion";
 import React from "react";
import "./about.css";
import { policeman } from "../../assets/images";
import { motion } from "framer-motion";
// import { TitleText } from "../Tracks/CustomTexts";
import { staggerContainer } from "../Tracks/motion";
import styles from "../Tracks/style";

const AboutSection = () => {
  const TitleText = ({ title, textStyles }) => (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >
      {title}
    </motion.h2>
  );
  return (
    <div className="flex flex-col sm:flex-row  sm:items-start sm:mt-48 items-center min-h-[32rem] mx-4 lg:mx-24">
      {/* Content  */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:mr-8 `}
      >
         {/* title= */}
         {
            <>
              <div className=" looked flex justify-start text-4xl lg:text-7xl font-bold text-white my-4 lg:my-6 ">
                ABOUT US
              </div>
            </>
          }
        <TitleText
         
          textStyles="text-center"
        />
        <p className=" width-836px about-description  text-white ">
        Welcome to The Crusade, a team dedicated to revolutionizing legal processes with innovative solutions. Our passion lies in leveraging the power of Artificial Intelligence and Machine Learning to address critical challenges in the realm of law enforcement and legal analysis.<br/>
        Our mission is to bring about a transformative change in the analysis of First Information Reports (FIRs). We recognize the significance of FIRs in law enforcement and believe that applying cutting-edge AI/ML technologies can enhance the accuracy and efficiency of the legal system.



        </p>
      </motion.div>

      {/*mobile view */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="sm:hidden mt-8 w-3/4"
      >
        <img
          // src={img}
          alt="About Image"
          className="self-center  w-full h-auto object-cover"
        />
      </motion.div>

      {/* Image on the right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden sm:block ml-8"
        style={{ width: "35%" }}
      >
        <img
          src={policeman} // Replace with your actual image source
          alt="About Image"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default AboutSection;
