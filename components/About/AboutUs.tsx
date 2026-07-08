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
    <div className="container mx-auto px-4 sm:px-6 py-10 mt-20 lg:mt-[130px] overflow-hidden">

      {/* Ghost Heading */}
      <div className="flex justify-end mb-8 select-none pointer-events-none">
        <h4 className="
          text-[64px]
          sm:text-[96px]
          lg:text-[128px]
          font-medium
          text-[#873481]/20
          tracking-[0.2em]
          leading-none
          text-right
        ">
          {headline}
        </h4>
      </div>

      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[12px] tracking-[0.15em] text-[#8A6BA8]">
            // 01 — bio
          </span>

          <span className="h-px flex-1 bg-[#6B2B5C]/15" />
        </div>

        <div className="
          rounded-[28px]
          bg-white/60
          backdrop-blur-xl
          border border-[#6B2B5C]/12
          shadow-[0_8px_30px_rgba(107,43,92,0.08)]
          p-6 sm:p-8
        ">
          <p className="font-mono text-[13px] sm:text-[14px] leading-8 text-[#241C2E]/85">
            <span className="select-none text-[#8A6BA8]/60 mr-3">
              01
            </span>

            {explanation}

            <span className="blink text-[#B0489C]">▍</span>
          </p>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-16 lg:mt-24"
      >
        {item.map((card, index) => (
          <div
            key={index}
            className="
              group
              w-full
              max-w-[520px]
              mx-auto
              rounded-[28px]
              p-8 sm:p-9
              bg-white/60
              backdrop-blur-xl
              border border-[#6B2B5C]/15
              shadow-[0_8px_30px_rgba(107,43,92,0.10)]
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_15px_40px_rgba(107,43,92,0.15)]
            "
          >
            {/* Card Header */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[12px] tracking-wide text-[#8A6BA8]">
                function{" "}
                <span className="text-[#241C2E]">
                  {card.subheadline.replace(/\s/g, "")}()
                </span>
              </span>

              <span className="font-mono text-[11px] text-[#8A6BA8]/70">
                0{index + 1}
              </span>
            </div>

            {/* Icon + Title */}
            <div className="flex items-center gap-4 mb-4">
              <div className="
                flex items-center justify-center
                w-12 h-12
                rounded-2xl
                bg-[#6B2B5C]/10
                transition-colors duration-300
                group-hover:bg-[#B0489C]/15
              ">
                <img
                  src={card.image}
                  alt={card.subheadline}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>

              <h5 className="text-[26px] font-semibold text-[#241C2E] tracking-tight">
                {card.subheadline}
              </h5>
            </div>

            {/* Description */}
            <p className="text-[15px] leading-7 text-[#241C2E]/75">
              {card.para}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutUs;