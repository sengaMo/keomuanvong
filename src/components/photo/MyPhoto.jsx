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
            className="rounded-full z-50"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MyPhoto;
