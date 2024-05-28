import React from "react";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "I can develop your website using the latest technologies.",
    link: "#",
  },
  {
    id: 2,
    title: "Web Design",
    description: "I can design your website using the latest technologies.",
    link: "#",
  },
  {
    id: 3,
    title: "Mobile Development",
    description: "I can develop your mobile app using the latest technologies.",
    link: "#",
  },
  {
    id: 4,
    title: "Mobile Design",
    description: "I can design your mobile app using the latest technologies.",
    link: "#",
  },
];

const Service = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-20 text-custom-600/80"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-2 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-4xl font-bold">{service.id}</div>
                  <Link to={"#"}>
                    <BsArrowDownRight />
                  </Link>
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <div className="border-b border-custom-500 w-full" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
