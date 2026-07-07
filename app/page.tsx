

import About from "@/components/About/About";
import AboutUs from "@/components/About/AboutUs";
import Intro from "@/components/Intro/Intro";
import Image from "next/image";


type User = {
  name: string;
  age: number;
};

export default function Home() {
  const name: string = "Ifrit";
  const age: number = 25;
  const isDeveloper: boolean = false;

  const skills: string[] = ["React", "Next.js", "TypeScript"];

  const user: User = {
    name: "Ifrit",
    age: 25,
  };

  return (
    <div className="mt-10 2xl:mt-[164px] overflow-hidden">
      <main className="">
        <Intro
          highlightedWord="Labiba"
          Headline="Ifrit Jahin"
          Subheadline="Hey there! I'm"
          ActionText="Software Engineer/ Web Developer"
        />
        <section id="about">

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
          headline="About Me"
          explanation="Junior Software Engineer with experience in full-stack web development using React, Next.js, and Laravel. Strong in building responsive UI, API integration, and performance optimization. Seeking opportunities to contribute to scalable and modern web applications."
          item={[ 
            { subheadline: "Design", para: "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.", image: "/ContentQuillPen.png" } , 
            { subheadline: "Education", para: "I can develop the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.", image: "/FileJava.png" }
           ]} 
         />  
        </section>
        
      </main>
    </div>
  );
}