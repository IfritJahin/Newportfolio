

import About from "@/components/About/About";
import AboutUs from "@/components/About/AboutUs";
import Intro from "@/components/Intro/Intro";
import Skills from "@/components/Skills/Skills"
import Image from "next/image";



export default function Home() {

  return (
    <div className="mt-10 2xl:mt-[140px] overflow-hidden">
      <main className="">
        <Intro
          highlightedWord="Labiba"
          Headline="Ifrit Jahin"
          Subheadline="Hey there! I'm"
          ActionText="Software Engineer/ Web Developer"
        />
        <div id="about" className="mb-20 lg:mb-[200px]">

          <About
            item={[
              {
                count: 2,
                suffix: " Y",
                actionText: "Experiences",
                subheadline: "",
              },
              {
                subheadline: "B.Sc.",
                actionText: "Computer Science & Engineering",
              },
              {
                count: 10,
                suffix: "+",
                actionText: "Projects",
                subheadline: "",
              },
            ]}
          />
          <AboutUs 
            headline="ABOUT ME"
            explanation="Junior Software Engineer with experience in full-stack web development using React, Next.js, and Laravel. Strong in building responsive UI, API integration, and performance optimization. Seeking opportunities to contribute to scalable and modern web applications."
            item={[ 
              { subheadline: "Design", para: "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.", image: "/ContentQuillPen.png" } , 
              { subheadline: "Development", para: "I can develop the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.", image: "/FileJava.png" }
             ]} 
           />  
        </div>
        <div id="skills">
          <Skills
           headline="SKILLS" />
        </div>
        
      </main>
    </div>
  );
}