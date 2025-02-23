import React from "react";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: `Stack.🟢 Node.js (Backend)
      ⚛️ React + Redux (Frontend)
      🐬 MySQL | 🐘 PostgreSQL | 🍃 MongoDB (Databases)
      🔥 Redis (Caching)
      🐳 Docker Swarm (Container Orchestration)
      🚀 Nginx (Reverse Proxy)

      Let’s build something amazing! 🚀`,
    link: "#",
  },
  {
    id: 2,
    title: "Flutter Development",
    description: `Stack. 📱 Flutter (Cross-Platform UI)
🎯 Dart (Programming Language)
🐬 MySQL | 🐘 PostgreSQL | 🍃 MongoDB (Databases)`,
    link: "#",
  },
  {
    id: 3,
    title: "Server Architecture Consultant",
    description: `🚀 Reverse Proxy: Nginx (Load Balancing & Security)
🌍 Scalability: Proxmox (Virtualization & Resource Management)`,
    link: "#",
  },
  {
    id: 4,
    title: "Outsourcing Development",
    description: `🖥️ Backend: 🟢 Node.js (API & Microservices)
⚛️ Frontend: React + Redux (Web UI) | 📱 Flutter (Mobile Apps)
🐬 Databases: MySQL | 🐘 PostgreSQL | 🍃 MongoDB
🔥 Caching: Redis (High-Speed Data Access)
🐳 Containerization: Docker Swarm (Orchestration & Deployment)
🚀 Reverse Proxy: Nginx (Load Balancing & Security)
🌍 Infrastructure: Proxmox (Virtualization & Cloud Solutions)

Let’s bring your ideas to life with expert development solutions! 🔥`,
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
            transition: { duration: 1, ease: "easeInOut" },
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
                <h2 className="font-bold text-xl">{service.title}</h2>
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
