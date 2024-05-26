import React from "react";
import profile from "../../assets/sengathith.jpeg";
import { motion } from "framer-motion";

const MyPhoto = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[208px] xl:w-[498px] xl:h-[358px] mix-blend-lighten"
        >
          <motion.img
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            src={profile}
            alt="image"
            className="object-contain rounded-full"
          />
        </motion.div>
        {/* test circle */}
        {/* <motion.svg
          className="w-[298px] h-[208px] xl:w-[498px] xl:h-[358px]"
          fill={"transparent"}
          viewBox={"0 0 506 506"}
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <motion.circle
            cx={"253"}
            cy={"253"}
            r={"250"}
            stroke={"#12625f"}
            strokeWidth={"4"}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          ></motion.circle>
        </motion.svg> */}
      </motion.div>
    </div>
  );
};

export default MyPhoto;
