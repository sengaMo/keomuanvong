import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" },
      }}
    >
      <h1>Resume</h1>
    </motion.div>
  );
};

export default Resume;
