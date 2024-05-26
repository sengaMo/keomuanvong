import React from "react";
import { motion } from "framer-motion";

const ContactIndex = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" },
      }}
    >
      <h1>ContactIndex</h1>
    </motion.div>
  );
};

export default ContactIndex;
