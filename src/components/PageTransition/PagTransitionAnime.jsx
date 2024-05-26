import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PagTransitionAnime = ({ children }) => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
      </div>
      {children}
    </AnimatePresence>
  );
};

export default PagTransitionAnime;
