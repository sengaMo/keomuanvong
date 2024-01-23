import React from "react";
import momo from "../../assets/sengathith.jpeg";
import { TiTick } from "react-icons/ti";
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
          <h1 className="font-bold text-4xl">My Skill</h1>
          <div className="flex flex-wrap gap-4">
            <div class="max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 mt-10 bg-sky-50">
              {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Front End</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 mt-10 bg-sky-50">
              {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Back End</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 mt-10 bg-sky-50">
              {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Data Science</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 mt-10 bg-sky-50">
              {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">System Design</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 mt-10 bg-sky-50">
              {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">DevOps</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
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
