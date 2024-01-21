 import React from "react";
import "./hero.css";
import {leftElement} from "../../assets/images";
import {rightElement } from "../../assets/images";


const Hero = () => {
  return (
    <>
      <div className="flex w-full h-full z-[20] my-6 items-center justify-center min-h-screen bg-transparent relative">
        {/* left */}
        <div className="hidden p-1 mx-5 md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 h-full object-cover opacity-100">
          <img src={leftElement} />
        </div>

        {/* Content Container */}
        <div className=" header absolute top-0 z-10 text-center p-8 my-6 ">
      <h1 className="head">Analysis of FIR using AI/ML for proper Act and Section</h1>
        <h1 className="head2">THE CRUSADE </h1>
        <p className="text-lg text-gray-600">
        Welcome to The Crusade, a team dedicated to revolutionizing legal <br/> processes with innovative solutions.
        </p>

      </div>

        {/* right */}
        <div className="hidden my-4 mx-4 md:block absolute top-0 right-0 h-full w-1/4 ">
          <img src={rightElement} />
        </div>
      </div>
    </>
  );
};

export default Hero;
