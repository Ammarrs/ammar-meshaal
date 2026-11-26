import React from "react";
import { SectionTitle } from "../Title/SectionTitle";
import SectionHeading from "../Title/SectionHeading";
import Button from "../Buttons/Button";
import { GoArrowUpRight } from "react-icons/go";
import ProjectCard from "../Card/ProjectCard";

const Featured = () => {
  const projectObjects = [
    {
      id: 1,
      img: "/public/project-images/KEMETRA.png",
      projectName: "KEMETRA",
      projectDesc: "Travel & culture / Concept preview",
      projectTech: ["React", "Tailwind", "Express"],
    },
    {
      id: 2,
      img: "/public/project-images/bLock.png",
      projectName: "bLock",
      projectDesc: "Manage, Track & Save your time",
      projectTech: ["JavaScript", "Tailwind", "React"],
    },
    {
      id: 3,
      img: "/public/project-images/pulse.png",
      projectName: "Lustro",
      projectDesc: "A colorful presentation viewer",
      projectTech: ["React", "Tailwind", "Express"],
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      <SectionTitle>01 / FEATURED WORK</SectionTitle>
      <div className="flex justify-between items-center">
        <SectionHeading>Made to stand out.</SectionHeading>
        <Button>
          All My Work
          <GoArrowUpRight />
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {projectObjects.map((projectObject) => {
          return <ProjectCard projectObject={projectObject} />;
        })}
      </div>
      <div className="py-5 border-b border-b-border">
        <span className="text-secondary">EVERY PROJECT STARTS WITH A QUESTION. WHAT IF?</span>
      </div>
    </div>
  );
};

export default Featured;
