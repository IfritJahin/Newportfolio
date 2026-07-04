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
    <div className="mt-[120px]">
      <main className="">
        <Intro
          highlightedWord="Labiba"
          Headline="Ifrit Jahin"
          Subheadline="Hey there! I'm"
          ActionText="Software Engineer/ Web Developer"
        />
      </main>
    </div>
  );
}