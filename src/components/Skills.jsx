import { React } from "react";
import delhimetro from "./image/delhimetro.png";
import wbs from "./image/wbs.webp";
import cpa from "./image/cpa.webp";
import budg from "./image/budg.png";
import skm from "./image/skm.png";
import tcc from "./image/TCc.png";
import cnp from "./image/cnp.webp";
import pps from "./image/ppss.jpg";

const Skills = () => {
  const icons = [
    {
      id: 1,
      src: delhimetro,
      title: "Planning of Delhi Metro",
      style: "shadow-red-500",
    },
    {
      id: 2,
      src: wbs,
      title: "Work breakdown structure (WBS) development",
      style: "shadow-white",
    },
    {
      id: 3,
      src: cpa,
      title: "Critical path analysis",
      style: "shadow-sky-300",
    },
    {
      id: 4,
      src: budg,
      title: "Budgeting and cost control",
      style: "shadow-black",
    },
    {
      id: 5,
      src: skm,
      title: "Stakeholder management",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: tcc,
      title: "Team coordination and collaboration",
      style: "shadow-yellow-200",
    },
    {
      id: 7,
      src: cnp,
      title: "Communication and presentation skills",
      style: "shadow-gray-300",
    },
    {
      id: 8,
      src: pps,
      title: "Project planning and scheduling",
      style: "shadow-blue-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="">
          <p className="text-4xl  font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="pt-4">
            There is the technologies which I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {icons.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
