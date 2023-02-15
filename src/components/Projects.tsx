import { Section } from "./Section";
import { projects, type Project } from "../data";
import Image from "next/image";
import { useState } from "react";

export const Projects = () => {
  const [projectId, setProjectId] = useState(0);
  const project: Project = projects[projectId];

  const increase = () => {
    if (projectId === projects.length - 1) {
      setProjectId(0);
    } else {
      setProjectId(projectId + 1);
    }
  };

  const decrease = () => {
    if (projectId === 0) {
      setProjectId(projects.length - 1);
    } else {
      setProjectId(projectId - 1);
    }
  };

  return (
    <Section id="projects" color="black" className="py-[60px]">
      <h2 className="text-5xl font-bold mb-6 lg:mb-12">
        Some of my best work 💼
      </h2>
      <div className="flex items-center justify-between gap-4 lg:gap-8 lg:flex-row flex-col-reverse">
        <a
          className="flex-1"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            placeholder="blur"
            className="w-full object-contain"
          />
        </a>

        <div className="flex flex-col justify-between gap-12 items-end lg:w-[400px] lg:h-[500px]">
          <div className="flex justify-end mt-12 lg:mt-0">
            <h3 className="absolute z-[0] mt-[-120px] ml-[-160px] text-[250px] text-secondary font-bold drop-shadow-[0_0px_1.5px_rgba(255,255,255,1)]">
              0{projectId + 1}
            </h3>
            <h3 className="relative text-[80px] z-[2] font-bold lg:text-end leading-[90px] h-[200px] lg:h-fit">
              {project.title}
            </h3>
          </div>

          <p className="text-grey text relative z-[2] max-w-[400px] text-cente lg:text-end lg:mt-0">
            {project.description}
          </p>

          <div className="flex gap-8 mb-8 lg:mb-0 w-full lg:w-fit justify-between">
            <button
              onClick={decrease}
              className="bg-primary text-secondary font-bold p-2 px-4"
            >
              ← Précédent
            </button>
            <button
              onClick={increase}
              className="bg-primary text-secondary font-bold p-2 px-6"
            >
              Suivant →
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};
