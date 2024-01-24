import React from "react";
import momo from "../../assets/sengathith.jpeg";
import { TiTick } from "react-icons/ti";

import { TbBrandVite } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { LuFileJson2 } from "react-icons/lu";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";

import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { DiNginx } from "react-icons/di";
import { SiKubernetes } from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb";

const HomeIndex = () => {
  const steppers = [
    {
      title: "High School",
      description: "Vientiane High School, Vientiane Capital, Lao PDR.",
    },
    {
      title: "University",
      description:
        "Jawaharlal Nehru Technological University Anantapur (JNTUA), India. From 2016 to 2019. / Bachelor of Technology (B.Tech) in Computer Science and Engineering.",
    },
    {
      title: "Work Experience",
      description:
        "Currently working as a Full Stack Developer at LAO-ASEAN HOSPITAL Co., Ltd. From 2021 to present.",
    },
  ];

  var reverseArray = [];
  var length = steppers.length;
  for (var i = length - 1; i >= 0; i--) {
    reverseArray.push(steppers[i]);
  }
  // test
  return (
    <section id="home">
      <div className="flex p-4 bg-emerald-50">
        <div className="grows flex justify-center w-full">
          <div className="flex flex-col p-10 mt-10">
            <div className="w-1/2">
              <p className="font-bold">Hey, I'm Mo</p>
            </div>
            <h className="font-bold text-6xl mt-4">Full Stack Developer</h>
            <div className="w-1/2 mt-4">
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum, quas. Amet soluta assumenda cum?
              </p>
            </div>
            <div className="w-60 mt-4">
              <button
                className="p-4 rounded-md bg-sky-700 font-bold text-white hover:shadow-md hover:bg-sky-50 hover:border-sky-700 hover:border-l hover:border-b
                border-l border-b
          hover:text-sky-700 transition-all duration-300 ease-in-out"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="grows flex justify-center w-full">
          <div className="flex mt-[100px]">
            <img className="w-[340px] h-60 rounded-md" src={momo} alt="hero" />
          </div>
        </div>
      </div>
      <div className="flex p-4 ml-[160px]">
        <div className="flex flex-col mt-10">
          <h1 className="font-bold text-4xl">My Skill and Interest</h1>
          <div className="flex flex-wrap gap-4">
            <div className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 mt-10 bg-sky-50">
              <div className="px-6 py-4">
                <p className="flex font-bold text-xl mb-2">Front End</p>
                <div className="flex gap-6">
                  <TbBrandVite className="w-8 h-8" />
                  <TbBrandNextjs className="w-8 h-8" />
                  <LuFileJson2 className="w-8 h-8" />
                  <FaCss3Alt className="w-8 h-8" />
                </div>
                <div className="flex gap-6 mt-4">
                  <FaHtml5 className="w-8 h-8" />
                  <SiTailwindcss className="w-8 h-8" />
                  <GrGraphQl className="w-8 h-8" />
                </div>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 mt-10 bg-sky-50">
              <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2">Back End</p>
                <div className="flex gap-6">
                  <FaNodeJs className="w-8 h-8" />
                  <SiMysql className="w-8 h-8" />
                  <BiLogoPostgresql className="w-8 h-8" />
                  <FaPython className="w-8 h-8" />
                </div>
                <div className="flex gap-6 mt-4">
                  <DiNginx className="w-8 h-8" />
                  <SiKubernetes className="w-8 h-8" />
                  <TbBinaryTree className="w-8 h-8" />
                </div>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 mt-10 bg-sky-50">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Data Science</div>
                <p className="text-gray-700 text-base">
                  Design and construct new processes for data modeling and
                  production using prototypes, algorithms, predictive models,
                  and custom analysis.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 mt-10 bg-sky-50">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Microcontroller</div>
                <p className="text-gray-700 text-base">
                  Everything is possible, if you don't stop trying.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 mt-10 bg-sky-50">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">System Design</div>
                <p className="text-gray-700 text-base">
                  System design is the process of defining the architecture,
                  components, modules, interfaces, and data for a system to
                  satisfy specified requirements. It involves translating user
                  requirements into a detailed blueprint that guides the
                  implementation phase. The goal is to create a well-organized
                  and efficient structure that meets the intended purpose while
                  considering factors like scalability, maintainability, and
                  performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-4 ml-[160px]">
        <div className="flex flex-col mt-10">
          <h1 className="font-bold text-4xl">Experience and Education</h1>
          <div className="mt-[50px]">
            {reverseArray.map((stepper, index) => {
              return (
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <div className="w-6 h-6 rounded-full bg-emerald-200">
                      <TiTick className=" ml-1 mt-1 text-emerald-700" />
                    </div>
                    <div className="w-[3px] ml-[11px] h-20 bg-emerald-200" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-xl">{stepper.title}</p>
                    <p className="text-sm">{stepper.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIndex;
