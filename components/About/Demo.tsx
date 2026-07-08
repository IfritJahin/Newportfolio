'use client'
import React from "react";
import { motion } from "framer-motion";
type AboutItem = {
  headline: string;
  explanation: string;
  item: {
    subheadline: string;
    para: string;
    image: string;
  }[];
};

const AboutUs = ({ headline, explanation, item }: AboutItem) => {
  return (
    <div className="container relative mx-auto px-4 sm:px-6 py-10 ">
      {/* Heading */}
<div className="flex justify-end">
<h4 className="
  text-[128px]
  font-medium
  text-[#873481]
  opacity-25
  tracking-[0.25em]
  text-right
">
  {headline}
</h4>
</div>
      <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }} 
          className="text-center">
        {/* <h4 className="font-medium text-[#873481] text-3xl lg:text-[40px] mb-4 tracking-[0.25em]">
          {headline}
        </h4> */}

        <div className="max-w-5xl mx-auto mt-10 align-left">
          <p className="text-body-sm lg:text-body font-regular text-[#000000]">
            {explanation}
          </p>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12 lg:mt-[130px]">
        {item.map((card, index) => (
          <div
            key={index}
            className="
              group
              w-full
              max-w-[531px]
              min-h-[264px]
              mx-auto
              bg-white
              rounded-[45px]
              shadow-md
              p-6
              transition-all
              duration-300
              ease-in-out
              hover:-translate-y-2
              hover:shadow-xl
              hover:bg-[#B7C8DA]
            "
          >
            <div className="w-full max-w-[361px] mx-auto mt-5">
              {/* Icon + Heading */}
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={card.image}
                  alt={card.subheadline}
                  width={52}
                  height={52}
                  className="w-[52px] h-[52px] object-contain"
                />

                <h5 className="text-h2 font-medium text-[#873481]  transition-colors duration-300">
                  {card.subheadline}
                </h5>
              </div>

              {/* Description */}
              <p className="text-body-sm leading-7 text-black">
                {card.para}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutUs;