import React from "react";
import { motion } from "framer-motion";
const WorkIndex = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" },
      }}
    >
      <h2>WorkIndex</h2>
    </motion.div>
  );
};

export default WorkIndex;
