import React from "react";
import { motion } from "framer-motion";
import Tabsls from "./tablist/Tabsls";

const about = {
  title: "About",
  description:
    "I am a full stack web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.",
  info: [
    {
      id: 1,
      title: "Name",
      value: "Sengathith Keomuanvong",
    },
    {
      id: 2,
      title: "Email",
      value: "sengathit.info@gmail.com",
    },
    {
      id: 3,
      title: "Phone",
      value: "+856 20 52441464",
    },
    {
      id: 4,
      title: "Address",
      value: "Ban Nalao, Sikhod District, Vientiane, Laos",
    },
  ],
};

const experience = {
  icon: "👨‍💻",
  title: "experience",
  description:
    "I have worked with various companies and clients. I have also worked with various technologies.",
  info: [
    {
      id: 1,
      title: "2019-2020",
      value: "Worked as a freelance web developer.",
    },
    {
      id: 2,
      title: "2020-2021",
      value: "Worked as a front end developer.",
    },
    {
      id: 3,
      title: "2021-2022",
      value: "Worked as a full stack developer.",
    },
  ],
};

const titleList = [
  {
    id: 1,
    title: "Experience",
    link: "experience",
  },
  {
    id: 2,
    title: "Eduaction",
    link: "education",
  },
  {
    id: 3,
    title: "Skills",
    link: "skills",
  },
  {
    id: 4,
    title: "About Me",
    link: "about",
  },
];

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" },
      }}
      className="min-h-[60vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabsls title={titleList} abouts={about} />
      </div>
    </motion.div>
  );
};

export default Resume;
