import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { RiMailUnreadFill, RiMailUnreadLine } from "react-icons/ri";
type IntroProps = {
  highlightedWord: string;
  Headline: string;
  Subheadline: string;
  ActionText: string;
};

const Intro = ({ highlightedWord, Headline, Subheadline, ActionText }: IntroProps) => {
  return (
    <section className="container mx-auto min-h-screen px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 h-full">
        {/* Left Column */}
        <div className="flex flex-col justify-center text-center md:text-left w-[545px] h-[321px]">
          <h4 className="font-normal text-[28px] md:text-[40px] mb-2">
            {Subheadline}
          </h4>

          <h1 className="font-medium text-[42px] md:text-[64px] leading-tight mb-4">
             <span className="text-[#873481]">{highlightedWord}</span>{" "}
            {Headline}
          </h1>

          <p className="font-normal text-[18px] md:text-[24px] text-[#C566BF]">
            {ActionText}
          </p>
        <div className="flex gap-4 mt-6">
          <a
            href="#"
            className="group w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:bg-[#873481]"
          >
            <RiMailUnreadFill className="text-[30px] text-[#873481] group-hover:text-white" />
          </a>

          <a
            href="#"
            className="group w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:bg-[#873481]"
          >
            <FaGithub className="text-[30px] text-[#873481] group-hover:text-white" />
          </a>

          <a
            href="#"
            className="group w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:bg-[#873481]"
          >
            <FaLinkedinIn className="text-[30px] text-[#873481] group-hover:text-white" />
          </a>
        </div>
        </div>
        {/* Right Column */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/profile.png"
            alt="Profile Picture"
            width={566}
            height={566}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;