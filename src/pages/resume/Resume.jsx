import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, User } from "lucide-react";
import { experience, education } from "./data";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Me", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Code },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      }}
      className="min-h-[40vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="min-h-screen ">
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-custom-600 to-custom-800 p-8 text-white">
              <h1 className="text-3xl font-bold">Sengathith KEOMUANVONG</h1>
              <p className="text-blue-100 mt-2">Senior Software Engineer</p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap border-b">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-4 text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? "border-b-2 border-custom-600 text-custom-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Content */}
            <div className="p-6">
              {activeTab === "about" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">About Me</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Passionate software engineer with 4+ years of experience in
                    building scalable web applications. Focused on creating
                    elegant solutions to complex problems while maintaining high
                    code quality and performance standards.
                  </p>
                </div>
              )}

              {activeTab === "experience" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Experience</h2>
                  <div className="space-y-6">
                    {experience &&
                      experience.map((exp) => {
                        return (
                          <>
                            <div className="border-l-2 border-custom-600 pl-4">
                              <h3 className="text-xl font-semibold">
                                {exp.title}
                              </h3>
                              <p className="text-custom-600 text-sm font-bold">
                                {exp.company} • {exp.date}
                              </p>
                              <p className="text-gray-600 text-sm ">
                                {exp.opening}
                              </p>
                              <p className="font-bold mt-2">
                                Completed Modules:
                              </p>
                              <p className="text-gray-600 text-sm">
                                {exp.descriptionOne
                                  .split("\n") // Split by newline
                                  .map((line, index) => (
                                    <p key={index}>{line.trim()}</p>
                                  ))}
                              </p>
                              <p className="font-bold mt-2">
                                Ongoing Development:
                              </p>
                              <p className="text-gray-600 text-sm ">
                                {exp.descriptionTwo}
                              </p>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
              )}

              {activeTab === "education" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Education</h2>
                  <div className="space-y-6">
                    {education &&
                      education.map((val) => {
                        return (
                          <div className="border-l-2 border-custom-600 pl-4">
                            <h3 className="text-xl font-semibold">
                              {val.title}
                            </h3>
                            <p className="text-custom-600">
                              {val.school} • {val.date}
                            </p>
                            <p className="text-gray-600 mt-2">{val.class}</p>
                            <p className="text-gray-600">{val.description}</p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}

              {activeTab === "skills" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Skills</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Technical Skills
                      </h3>
                      <div className="space-y-2">
                        {[
                          "JavaScript/TypeScript",
                          "React.js",
                          "Node.js",
                          "Flutter",
                          "Python",
                          "AWS",
                        ].map((skill) => (
                          <div key={skill} className="flex items-center">
                            <div className="w-2 h-2 bg-custom-600 rounded-full mr-2"></div>
                            <span className="text-gray-700">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Soft Skills
                      </h3>
                      <div className="space-y-2">
                        {[
                          "Team Leadership",
                          "Problem Solving",
                          "Communication",
                          "Agile/Scrum",
                          "Mentoring",
                        ].map((skill) => (
                          <div key={skill} className="flex items-center">
                            <div className="w-2 h-2 bg-custom-600 rounded-full mr-2"></div>
                            <span className="text-gray-700">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
