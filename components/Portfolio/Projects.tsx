'use client'

import React from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  link?: string;
  height?: string; // e.g. "420px", lets each card have its own image height
};

type ProjectsProps = {
  headline: string;
  projects: Project[];
};

function CornerMarks() {
  return (
    <>
      <span className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#B0489C] z-10" />
      <span className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#B0489C] z-10" />
      <span className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#B0489C] z-10" />
      <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#B0489C] z-10" />
    </>
  );
}

const Projects = ({
  headline = "PROJECTS",
  projects = [
    {
      title: "Brac Seed",
      description:
        "A construction firm seeking a modern corporate website to strengthen credibility, showcase large-scale projects, and support business growth.",
      image: "./Brac Seed.png",
      link: "https://bracseed.com.bd/",
      height: "380px",
    },
    {
      title: "BAF Shaheen",
      description:
        "Built a full-stack product with Laravel to automate task prioritization and workflow management for distributed teams, while collaborating closely with a team throughout the development process.",
      image: "./baf.png",
      link: "#",
      height: "500px",
    },
    {
      title: "TechShop",
      description:
      "Designed and developed responsive website templates as an individual internship project using React, Next.js, and Sass, focusing on creating modern, reusable, and high-performance frontend solutions.",
      image: "./techshop.png",
      link: "https://ifritjahin.github.io/TechShopy/",
      height: "380px",
    },
    {
      title: "DigiX",
      description:
        "Contributed to the frontend development of an AI-powered workflow management platform using Laravel, collaborating with a team to build responsive interfaces and integrate features for task prioritization and distributed team management.",
      image: "./digix.png",
      link: "https://adndiginet.com/digix",
      height: "500px",
    },
    {
      title: "Adn QuickSite Templates",
      description:
      "Developed and customized responsive website templates using React, Next.js, and Sass, collaborating with the team to create modern, reusable, and high-performance frontend solutions.",
      image: "./quick.png",
      link: "https://adndiginet.com/digix",
      height: "500px",
    },
    
  ],
}: Partial<ProjectsProps>) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-10">
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
          {headline}
        </h4>
      </div>

      <div className="flex items-center gap-3 mb-10 max-w-3xl">
        <span className="font-mono text-[12px] tracking-[0.15em] text-[#8A6BA8]">
          // 04 — projects
        </span>
        <span className="h-px flex-1 bg-[#6B2B5C]/15" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-14 items-end">
        {projects.map((project, index) => {
          const isLast = index === projects.length - 1;
          const isOddCountLastItem = isLast && projects.length % 2 !== 0;

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              className={`group ${
                isOddCountLastItem
                  ? "md:col-span-2 md:max-w-[calc(50%-1.75rem)] md:mx-auto"
                  : ""
              }`}
            >
              {/* Image with corner marks + hover overlay */}
              <a
                href={project.link || "#"}
                className="relative block"
                target="_blank"
              >
                <CornerMarks />

                <div
                  className="
                    relative overflow-hidden
                    rounded-[4px]
                    border border-[#6B2B5C]/15
                    shadow-[0_8px_30px_rgba(107,43,92,0.10)]
                  "
                  style={{ height: project.height || "420px" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full h-full object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                    
                  />

                  {/* Dark tint on hover */}
                  <div
                    className="
                      absolute inset-0
                      bg-[#241C2E]/0
                      group-hover:bg-[#241C2E]/40
                      transition-colors duration-500
                    "
                  />

                  {/* View Project button */}
                  <div
                    className="
                      absolute inset-0
                      flex items-center justify-center
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-500
                    "
                  >
                    <span
                      className="
                        flex items-center gap-2
                        font-mono text-[13px] font-semibold tracking-wide
                        text-[#241C2E]
                        bg-[#B0489C]/90
                        px-6 py-3 rounded-full
                        shadow-lg
                        translate-y-3 group-hover:translate-y-0
                        transition-transform duration-500
                      "
                    >
                      VIEW PROJECT
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>

              {/* Title + description */}
              <h5 className="text-[22px] font-semibold text-[#532350] mt-6 mb-2">
                {project.title}
              </h5>
              <p className="text-[15px] leading-7 text-[#241C2E]/70">
                {project.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;