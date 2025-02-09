// "use client";
// import { textContainer, textVariant2 } from "../Tracks/motion";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
// import { TitleText } from "../Tracks/CustomTexts";
import { staggerContainer } from "../Tracks/motion";
import styles from "../Tracks/style";

import { initalQues, moreQues } from "./faq_master";

export default function Faqs() {
  const [open, setOpen] = useState(-1);
  const [loadMore, setloadMore] = useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  // const TitleText = ({ title, textStyles }) => (
  //   <motion.h2
  //     variants={textVariant2}
  //     initial="hidden"
  //     whileInView="show"
  //     className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  //   >
  //     {title}
  //   </motion.h2>
  // );

  return (
    <div
      className="w-full px-10 mt-20 text-center text-white md:px-20 xl:px-32"
      id="faq"
    >
      <Fragment>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          {/* title= */}
          {
              <>
                <div className="text-5xl lg:text-6xl font-bold text-white my-4 lg:my-6 font-[Oswald]">
                FREQUENTLY ASKED QUESTION 
                </div>
              </>
            }
          {/* <TitleText
            
            textStyles="text-center"
          /> */}
        </motion.div>
        <div className="mt-20 md:mx-10  lg:grid grid-cols-1 gap-x-10">
          <div>
            {initalQues.map((faq, index) => {
              return (
                <Accordion
                  key={faq.title + index}
                  className=""
                  open={open === parseInt(index + 1)}
                >
                  <AccordionHeader
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(255,255,255,0.2) , rgba(0,0,0,0.02)",
                    }}
                    className={`my-4 p-4 text-center rounded-lg text-base text-white font-normal font-['Poppins'] border-[rgba(0,0,0,0.1)] border-t-2 border-r-2`}
                    onClick={() => handleOpen(index + 1)}
                  >
                    <h1 className="w-full text-center lg:text-left sm:text-base md:text-lg">
                      {faq.title}
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-sm md:text-base h-auto text-justify lg:text-left text-white rounded-xl p-4 bg-[rgba(0,0,0,0.4)]">
                    {faq.content}
                  </AccordionBody>
                </Accordion>
              );
            })}
          </div>
          <div className={"lg:block " + (loadMore ? " " : "hidden ")}>
            {moreQues.map((faq, index) => {
              return (
                <Accordion
                  key={faq.title + index}
                  className=""
                  open={open === parseInt(index + 9)}
                >
                  <AccordionHeader
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(255,255,255,0.2) , rgba(0,0,0,0.02)",
                    }}
                    className={`my-4 p-4 text-center rounded-lg text-base text-white font-normal font-['Poppins'] border-[rgba(0,0,0,0.1)] border-t-2 border-r-2`}
                    onClick={() => handleOpen(index + 9)}
                  >
                    <h1 className="w-full text-center lg:text-left sm:text-base md:text-lg">
                      {faq.title}
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-sm md:text-base h-auto text-left text-white rounded-xl p-4 bg-[rgba(0,0,0,0.4)]">
                    {faq.content}
                  </AccordionBody>
                </Accordion>
              );
            })}
          </div>
          <div className="flex items-center justify-center  w-full lg:hidden">
            <button
              onClick={() => setloadMore(!loadMore)}
              className="p-3 mt-4 mb-10 text-2xl bg-[#503883] rounded-xl text-gray-300"
            >
              {loadMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </Fragment>
    </div>
  );
}
