import React from "react";
import momo from "../../assets/sengathith.jpeg";
import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import MyPhoto from "../../components/photo/MyPhoto";

const HomeIndex = () => {
  // test
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" },
      }}
      className="h-full"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">FullStack Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-custom-500 uppercase">
                Sengathit Keomuanvong
              </span>
            </h1>
            <p className="max-w-[400px] mb-9 text-custom-600/80">
              i excel at crafting elegant digital experiences and i am
              proficient in various programming lanaguages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <button
                className="flex items-center gap-2 outline outline-2 rounded-md px-2 hover:outline-1 shadow-md
               outline-custom-500 text-custom-500 hover:bg-custom-500 hover:text-white transition-all duration-100 ease-in-out"
              >
                <span>Download CV</span>
                <MdOutlineFileDownload className="text-xl" />
              </button>
              <div className="mb-8 xl:mb-0">
                <SocialMedia
                  constainerStypes="flex gap-4"
                  iconStyles="w-9 h-9 border rounded-full flex justify-center items-center text-base
                  text-custom-500 hover:bg-custom-500 hover:text-white transition-all duration-100 ease-in-out"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <MyPhoto />
          </div>
        </div>
      </div>
      {/* <img src={momo} alt /> */}
    </motion.div>
  );
};

export default HomeIndex;
