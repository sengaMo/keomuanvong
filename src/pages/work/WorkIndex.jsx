import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imgOne from "../../assets/488.jpg";
import imgTwo from "../../assets/3858048.jpg";
import imgThree from "../../assets/9151137.jpg";
import momo from "../../assets/sengathith.jpeg";

const projectsDev = [
  {
    number: "1",
    category: "development",
    title: "Project 1",
    description: "This is a project 1",
    stack: [
      {
        name: "React",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Framer Motion",
      },
    ],
    image: imgOne,
    live: "https://www.google.com",
    github: "https://www.google.com",
  },
  {
    number: "2",
    category: "development",
    title: "Project 2",
    description: "This is a project 2",
    stack: [
      {
        name: "React",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Framer Motion",
      },
    ],
    image: imgThree,
    live: "https://www.google.com",
    github: "https://www.google.com",
  },
  {
    number: "3",
    category: "development",
    title: "Project 3",
    description: "This is a project 3",
    stack: [
      {
        name: "React",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Framer Motion",
      },
    ],
    image: imgTwo,
    live: "https://www.google.com",
    github: "https://www.google.com",
  },
  {
    number: "4",
    category: "development",
    title: "Project 4",
    description: "This is a project 4",
    stack: [
      {
        name: "React",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Framer Motion",
      },
    ],
    image: momo,
    live: "https://www.google.com",
    github: "https://www.google.com",
  },
];

const Images = ({ image }) => {
  return (
    <>
      <img src={image} alt="phot" className="sa" />
    </>
  );
};

const WorkIndex = () => {
  const [projects, setProjectsDev] = useState(projectsDev[0]);

  const handleSlide = (swipe) => {
    const currentIndex = swipe.activeIndex;
    setProjectsDev(projectsDev[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      }}
      className="min-h-[70vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              {/* outline Menu */}
              <div className="text-8xl leading-none font-extrabold text-custom-600 text-transparent text-outline">
                {projects.number}
              </div>
            </div>
            {/* project category */}
            <h2 className="text-[42px] font-bold leading-none  group-hover:text-custom-600 transition-all duration-500 capitalize">
              {projects.category}
            </h2>
            <p>{projects.description}</p>
            {/* stack */}
            <ul>
              {projects.stack.map((item, index) => {
                return (
                  <li key={index} className=" text-xl font-medium">
                    {item.name}
                    {index !== projects.stack.length - 1 ? "," : ""}
                  </li>
                );
              })}
            </ul>
            <div className="border border-custom-800" />
            <div className="flex items-center gap-4">
              <a href={projects.live} className="text-xl font-medium">
                Demo
              </a>
              <a href={projects.github} className="text-xl font-medium">
                Github
              </a>
            </div>
          </div>
          <div className="w-full xl:w-[50%] xl:h-[460px] flex justify-center order-1 xl:order-none">
            <div className="w-full ">
              <Swiper
                // install Swiper modules

                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={handleSlide}
              >
                {projectsDev.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative flex justify-center items-center group">
                        <div className="relative w-full h-full">
                          <Images image={project.image} />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkIndex;
