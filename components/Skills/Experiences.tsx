'use client'
import React from 'react'
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
// import type { ExperienceItem } from "./Skills";


const WORKSPACE_IMAGES = [
  "/Work2.jfif",
  "/Work.jfif",
  "/desktop.jfif"
  // "https://picsum.photos/seed/workspace2/500/650",
  // "https://picsum.photos/seed/workspace3/500/650",
  // "https://picsum.photos/seed/workspace4/500/650",
  // "https://picsum.photos/seed/workspace5/500/650",
];
 type ExperienceItem = {
    role: string;
    company: string;
    duration: string;
    description: string;
    logo?: string;
  };
  type ExperiencesProps = {
    experienceHeadline?: string;
    experience?: ExperienceItem[];
  };
const Experiences = ({
    experienceHeadline = "EXPERIENCES",
    experience = [
        {
          role: "Junior Software Engineer",
          company: "ADN Diginet",
          duration: "2024 — 2025",
          description:
            "Built responsive UI with React and Next.js, integrated REST APIs, and optimized performance across the stack.",
          logo: "/adn.svg"
        },
        {
          role: "Intern & Trainee",
          company: "ADN Diginet",
          duration: "2024",
          description:
            "Assisted in developing full-stack features using Laravel and React, collaborating with the design team on UI improvements.",
          logo: "/adn.svg"
    
        },
        {
          role: "Intern",
          company: "Codetree",
          duration: "2023",
          description:
            "Assisted in developing full-stack features using React, collaborating with the design team on UI improvements.",
            logo: "/codetree.png"
        },
      ],
  }: ExperiencesProps) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-10 overflow-hidden">
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

        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-[12px] tracking-[0.15em] text-[#8A6BA8]">
            // 03 — experience
          </span>
          <span className="h-px flex-1 bg-[#6B2B5C]/15" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-10 lg:gap-30 items-start">
          {/* Timeline — left */}
          <div className="relative">
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
                {/* Timeline Dot */}
                <span
                  className="
                    absolute left-0 top-1.5
                    w-[15px] h-[15px]
                    rounded-full
                    bg-white
                    border-2 border-[#B0489C]
                  "
                />

                {/* Title Row */}
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3 mb-2">
                  <div className="flex-1 min-w-[200px] flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h5 className="text-[20px] font-semibold text-[#532350]">
                      {job.role}
                    </h5>

                    <span className="font-mono text-[12px] text-[#8A6BA8]">
                      @ {job.company}
                    </span>
                  </div>

                  {/* Company Logo */}
                  {job.logo && (
                    <div
                      className="
                        bg-white rounded-2xl px-4 py-2
                        shadow-[0_4px_20px_rgba(107,43,92,0.10)]
                        border border-[#6B2B5C]/10
                        shrink-0
                        transition-transform duration-300
                        hover:-translate-y-0.5
                      "
                    >
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="h-6 w-auto max-w-[100px] object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Duration */}
                <span className="font-mono text-[11px] text-[#8A6BA8]/70 block mb-3">
                  {job.duration}
                </span>

                {/* Description */}
                <p className="text-[15px] leading-7 text-[#241C2E]/75">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Workspace slider — right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="lg:sticky lg:top-24"
          >
            <div
              className="
                rounded-[28px] overflow-hidden
                border border-[#6B2B5C]/15
                shadow-[0_8px_30px_rgba(107,43,92,0.12)]
              "
            >
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3200, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
                className="workspace-swiper"
              >
                {WORKSPACE_IMAGES.map((src, i) => (
                  <SwiperSlide key={i}>
                  <div className="relative overflow-hidden rounded-3xl">
          <img
            src={src}
            alt={`Workspace ${i + 1}`}
            className="w-full h-[460px] object-cover"
          />

        <div className="absolute inset-0 bg-[#873481] opacity-10"></div>
        </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <p className="font-mono text-[11px] text-[#8A6BA8]/60 mt-3 text-center">
              // my workspace, over the years
            </p>
          </motion.div>
        </div>
    </div>
)
}

export default Experiences