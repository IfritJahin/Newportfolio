'use client'

import React from "react";
import { motion } from "framer-motion";

type SkillGroup = {
  categories: {
    name: string;
    items: string[];
    icons?: string[];
  }[];
};

type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

type SkillsExperienceProps = {
  skillsHeadline: string;
  experienceHeadline: string;
  skills: SkillGroup[];
  experience: ExperienceItem[];
};

const FLOATING_ICONS = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React",
    top: "8%",
    left: "5%",
    size: 46,
    duration: 6,
    delay: 0,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    alt: "Tailwind CSS",
    top: "0%",
    left: "50%",
    size: 44,
    duration: 6.5,
    delay: 1.1,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    alt: "Laravel",
    top: "35%",
    left: "85%",
    size: 42,
    duration: 7.2,
    delay: 0.3,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js",
    top: "42%",
    left: "50%",
    size: 36,
    duration: 8,
    delay: 1.6,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
    alt: "typescript",
    top: "22%",
    left: "59%",
    size: 36,
    duration: 8,
    delay: 1.6,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    alt: "Git",
    top: "35%",
    left: "28%",
    size: 34,
    duration: 6.8,
    delay: 0.9,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    alt: "VUE",
    top: "20%",
    left: "42%",
    size: 34,
    duration: 6.8,
    delay: 0.9,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    alt: "Figma",
    top: "8%",
    left: "22%",
    size: 34,
    duration: 7.6,
    delay: 1.3,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    alt: "Bootstrap",
    top: "39%",
    left: "10%",
    size: 38,
    duration: 6.2,
    delay: 0.5,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    alt: "Next.js",
    top: "0%",
    left: "88%",
    size: 38,
    duration: 6.2,
    delay: 0.5,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    alt: "Python",
    top: "10%",
    left: "68%",
    size: 38,
    duration: 6.2,
    delay: 0.5,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    alt: "Redux",
    top: "25%",
    left: "78%",
    size: 38,
    duration: 6.2,
    delay: 0.5,
  },
];

function FloatingTechIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0">
      {FLOATING_ICONS.map((icon, index) => (
        <motion.img
          key={`${icon.alt}-${index}`}
          src={icon.src}
          alt={icon.alt}
          width={icon.size}
          height={icon.size}
          style={{ position: "absolute", top: icon.top, left: icon.left }}
          className="opacity-65"
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

const SkillsExperience = ({
  skillsHeadline = "SKILLS",
  experienceHeadline = "EXPERIENCE",
  skills = [
    {
      categories: [
        { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Typescript", "Redux"] },
        { name: "Backend", items: ["Laravel", "REST APIs"] },
      ],
    },
    { categories: [
      { name: "Tools", items: ["Git", "Figma"] },
      { name: "Learning", items: ["Vue", "Docker"] }
      ]
    },
    {
      categories: [
        {
          name: "Languages",
          items: ["Bangla", "English [B2]", "Deutsch [A2]"],
          icons: ["/bangla.png", "/english.png", "/germany.png"],
        },
      ],
    },
  ],
  experience = [
    {
      role: "Junior Software Engineer",
      company: "ADN Diginet",
      duration: "2024 — 2025",
      description:
        "Built responsive UI with React and Next.js, integrated REST APIs, and optimized performance across the stack.",
    },
    {
      role: "Intern & Trainee",
      company: "ADN Diginet",
      duration: "2024",
      description:
        "Assisted in developing full-stack features using Laravel and React, collaborating with the design team on UI improvements.",
    },
    {
      role: "Intern",
      company: "Codetree",
      duration: "2023",
      description:
        "Assisted in developing full-stack features using React, collaborating with the design team on UI improvements.",
    },
  ],
}: Partial<SkillsExperienceProps>) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-10 overflow-hidden">
      {/* ---------------- SKILLS ---------------- */}
      <div className="relative">
        <FloatingTechIcons />

        {/* Ghost Heading */}
        <div className="flex justify-start mb-8 select-none pointer-events-none">
          <h4 className="
            text-[64px]
            sm:text-[96px]
            lg:text-[128px]
            font-medium
            text-[#873481]/20
            tracking-[0.2em]
            leading-none
            text-left
          ">
            {skillsHeadline}
          </h4>
        </div>

        <div className="flex items-center gap-3 mb-8 max-w-3xl">
          <span className="font-mono text-[12px] tracking-[0.15em] text-[#8A6BA8]">
            // 02 — skills
          </span>
          <span className="h-px flex-1 bg-[#6B2B5C]/15" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {skills.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="
                rounded-[28px]
                p-6 sm:p-7
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
              {group.categories.map((category, index) => (
                <div key={category.name} className="mb-6 last:mb-0">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[12px] tracking-wide text-[#8A6BA8]">
                      {category.name}
                    </span>

                    <span className="font-mono text-[11px] text-[#8A6BA8]/70">
                      0{index + 1}
                    </span>
                  </div>
                  {category.icons ? (
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        {category.items.map((item, i) => (
                          <div
                            key={item}
                            className="flex flex-col items-center text-center"
                          >
                            <img
                              src={category.icons?.[i]}
                              alt={item}
                              className="w-14 h-14 object-contain mb-3"
                            />

                            <span className="font-mono text-[12px] text-[#6B2B5C]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <span
                            key={item}
                            className="
                              font-mono text-[12px]
                              px-3 py-1.5
                              rounded-full
                              bg-[#6B2B5C]/8
                              text-[#6B2B5C]
                            "
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ---------------- EXPERIENCE ---------------- */}

      <div className="flex justify-end mt-24 mb-8 select-none pointer-events-none">
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
          {experienceHeadline}
        </h4>
      </div>

      <div className="flex items-center gap-3 mb-8 max-w-3xl">
        <span className="font-mono text-[12px] tracking-[0.15em] text-[#8A6BA8]">
          // 03 — experience
        </span>
        <span className="h-px flex-1 bg-[#6B2B5C]/15" />
      </div>

      <div className="max-w-3xl relative">
        {/* vertical line */}
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-[#6B2B5C]/15" />

        {experience.map((job, index) => (
          <motion.div
            key={`${job.company}-${index}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false }}
            className="relative pl-8 pb-10 last:pb-0"
          >
            {/* dot */}
            <span className="
              absolute left-0 top-1.5
              w-[15px] h-[15px]
              rounded-full
              bg-white
              border-2 border-[#B0489C]
            " />

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <h5 className="text-[20px] font-semibold text-[#241C2E]">
                {job.role}
              </h5>
              <span className="font-mono text-[12px] text-[#8A6BA8]">
                @ {job.company}
              </span>
            </div>

            <span className="font-mono text-[11px] text-[#8A6BA8]/70 block mb-3">
              {job.duration}
            </span>

            <p className="text-[15px] leading-7 text-[#241C2E]/75">
              {job.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsExperience;