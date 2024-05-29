import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Tabsls = ({ title, abouts }) => {
  const [experince, setExperience] = useState("");
  const [about, setAbout] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");

  const handleClick = (e) => {
    if (e === "experience") {
      setExperience("active");
      setAbout("");
      setEducation("");
      setSkills("");
    } else if (e === "about") {
      setExperience("");
      setAbout("active");
      setEducation("");
      setSkills("");
    } else if (e === "education") {
      setExperience("");
      setAbout("");
      setEducation("active");
      setSkills("");
    } else if (e === "skills") {
      setExperience("");
      setAbout("");
      setEducation("");
      setSkills("active");
    }
  };

  useEffect(() => {
    setExperience("active");
    setAbout("");
    setEducation("");
    setSkills("");
  }, []);

  return (
    <div className="xl:flex">
      <ul className="flex-col space-y space-y-4 text-sm font-medium text-custom-600 md:me-4 mb-4 md:mb-0">
        {title.map((item, index) => {
          return (
            <li
              key={index}
              className="hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <button
                onClick={() => handleClick(item.link)}
                className="inline-flex items-center px-4 py-3 text-white bg-custom-600 rounded-lg w-full "
                aria-current="page"
              >
                <svg
                  className="w-4 h-4 me-2 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
      {experince === "active" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut" },
          }}
          className="p-6 text-medium text-custom-500 rounded-lg w-full"
        >
          <h3 className="text-lg font-bold text-custom-600  mb-2">
            Experince Tab
          </h3>
          <p className="mb-2 text-sm">
            This is some placeholder content the Profile tab's associated
            content, clicking another tab will toggle the visibility of this one
            for the next.
          </p>
          <p className=" text-sm">
            The tab JavaScript swaps classNamees to control the content
            visibility and styling.
          </p>
        </motion.div>
      ) : null}
      {education === "active" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut" },
          }}
          className="p-6 text-medium text-custom-500 rounded-lg w-full"
        >
          <h3 className="text-lg font-bold text-custom-600  mb-2">
            Education Tab
          </h3>
          <p className="mb-2 text-sm">
            This is some placeholder content the Profile tab's associated
            content, clicking another tab will toggle the visibility of this one
            for the next.
          </p>
          <p className=" text-sm">
            The tab JavaScript swaps classNamees to control the content
            visibility and styling.
          </p>
        </motion.div>
      ) : null}
      {skills === "active" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut" },
          }}
          className="p-6 text-medium text-custom-500 rounded-lg w-full"
        >
          <h3 className="text-lg font-bold text-custom-600  mb-2">
            Skills Tab
          </h3>
          <p className="mb-2 text-sm">
            This is some placeholder content the Profile tab's associated
            content, clicking another tab will toggle the visibility of this one
            for the next.
          </p>
          <p className=" text-sm">
            The tab JavaScript swaps classNamees to control the content
            visibility and styling.
          </p>
        </motion.div>
      ) : null}
      {about === "active" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut" },
          }}
          className="p-6 text-medium text-custom-500 rounded-lg w-full"
        >
          <h3 className="text-lg font-bold text-custom-600  mb-2">
            {abouts.title}
          </h3>
          <p className="mb-2 text-sm">{abouts.description}</p>
          <p className=" text-sm">
            {abouts.info.map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex gap-4">
                    <p>{item.title}:</p>
                    <p>{item.value}</p>
                  </div>
                </div>
              );
            })}
          </p>
        </motion.div>
      ) : null}
    </div>
  );
};

export default Tabsls;
