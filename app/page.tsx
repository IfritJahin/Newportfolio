import Image from "next/image";
import Navbar from "./Layout/Navbar/page";

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
    <div className="">
      <main className="">

        <h1 className="text-4xl font-bold">{name}</h1>

        <p>Age: {age}</p>

        <p>
          Status: {isDeveloper ? "Frontend Developer" : "Student"}
        </p>

        <h2 className="text-2xl font-semibold mt-6">Skills</h2>

        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-6">User Information</h2>

        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
      </main>
    </div>
  );
}