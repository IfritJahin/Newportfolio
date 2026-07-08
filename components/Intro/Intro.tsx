'use client'
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { RiMailUnreadFill, RiMailUnreadLine } from "react-icons/ri";
import { motion } from "framer-motion";
type IntroProps = {
  highlightedWord: string;
  Headline: string;
  Subheadline: string;
  ActionText: string;
};

const Intro = ({ highlightedWord, Headline, Subheadline, ActionText }: IntroProps) => {
  return (
  <div className="container mx-auto px-6 py-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

      {/* Left Column */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="flex flex-col justify-center text-center lg:text-left w-full max-w-[545px] mx-auto lg:mx-[90px] xl:mx-[60px] 2xl:mx-0">
          <h4 className="font-normal text-[24px] sm:text-[32px] lg:text-[35px] 2xl:text-[40px] mb-2">
            {Subheadline}
          </h4>

          <h1 className="font-medium text-[38px] sm:text-[52px] lg:text-[56px] 2xl:text-[64px] leading-tight mb-4">
            <span className="text-[#873481]">{highlightedWord}</span>{" "}
            {Headline}
          </h1>

          <p className="font-normal text-[18px] sm:text-[20px] lg:text-[20px] 2xl:text-[24px] text-[#C566BF]">
            {ActionText}
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4 mt-8">
            <a
              href="#"
              className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:bg-[#873481]"
            >
              <RiMailUnreadFill className="text-[24px] sm:text-[28px] text-[#873481] group-hover:text-white" />
            </a>

            <a
              href="#"
              className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:bg-[#873481]"
            >
              <FaGithub className="text-[24px] sm:text-[28px] text-[#873481] group-hover:text-white" />
            </a>

            <a
              href="#"
              className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:bg-[#873481]"
            >
              <FaLinkedinIn className="text-[24px] sm:text-[28px] text-[#873481] group-hover:text-white" />
            </a>
          </div>

      </motion.div>

      {/* Right Column */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }} className="flex justify-center">
        <Image
          src="/profile.png"
          alt="Profile Picture"
          width={566}
          height={566}
          className="w-[260px] sm:w-[340px] md:w-[420px] lg:w-[566px] h-auto 2xl:mr-[-300px] xl:mr-[-200px] lg:mr-[25px] md:mr-0"
        />
      </motion.div>

    </div>
  </div>
  );
};

export default Intro;