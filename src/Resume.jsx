import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiExternalLink,
  FiCode,
  FiAward,
  FiBriefcase,
  FiUser,
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";
import ProfileImage from "./picture/1000015333.jpg";
import { englishContent } from "./data/enData";
import { persianContent } from "./data/faData";

const Resume = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [activeSection, setActiveSection] = useState("about");

  const content = isEnglish ? englishContent : persianContent;
  const dir = isEnglish ? "ltr" : "rtl";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skillIcons = {
    React: <FaReact className="text-blue-400" />,
    TypeScript: <SiTypescript className="text-blue-600" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
    Redux: <SiRedux className="text-purple-500" />,
    Git: <FaGitAlt className="text-orange-600" />,
    Firebase: <SiFirebase className="text-yellow-500" />,
    MongoDB: <SiMongodb className="text-green-600" />,
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8"
      dir={dir}
    >
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <motion.div
          initial={{ x: -100, y: -100 }}
          animate={{ x: [0, 100, 0], y: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        ></motion.div>
        <motion.div
          initial={{ x: 100, y: 100 }}
          animate={{ x: [0, -100, 0], y: [0, -100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        ></motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto bg-white dark:bg-gray-800/90 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
      >
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="relative z-10 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-gray-200 shadow-lg overflow-hidden ring-4 ring-white/30"
              >
                <img
                  src={ProfileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Personal Info */}
              <div className="flex-1 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      {content.header.name}
                    </h1>
                    <div className="text-xl md:text-2xl font-medium opacity-90 mb-4">
                      <Typewriter
                        words={[content.header.title]}
                        loop={1}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setIsEnglish(!isEnglish)}
                    className="btn btn-info  text-white "
                  >
                    {isEnglish ? " فارسی" : "English"}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    {
                      icon: <FiMail />,
                      content: content.header.email,
                      href: `mailto:${content.header.email}`,
                    },
                    {
                      icon: <FiPhone />,
                      content: content.header.phone,
                      href: `tel:${content.header.phone}`,
                    },
                    { icon: <FiMapPin />, content: content.header.location },
                    {
                      icon: <FiGithub />,
                      content: content.header.github,
                      href: "https://github.com/mhsloymanpour",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-white/20 p-2 rounded-full">
                        {React.cloneElement(item.icon, {
                          className: "h-5 w-5",
                        })}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:opacity-80 transition-opacity"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <span>{item.content}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center bg-gray-100 dark:bg-gray-700/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
          <div className="tabs bg-transparent">
            {[
              {
                id: "about",
                icon: <FiUser />,
                label: isEnglish ? "About & Skills" : "درباره من و مهارت‌ها",
              },
              {
                id: "portfolio",
                icon: <FiBriefcase />,
                label: content.sections.portfolio.title,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`tab tab-lg flex items-center gap-2 ${
                  activeSection === tab.id
                    ? "tab-active !text-blue-600 dark:!text-blue-400 !border-b-2 !border-blue-500"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeIn}
              transition={{ duration: 0.3 }}
            >
              {activeSection === "about" && (
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    {content.sections.about.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-8">
                    {content.sections.about.description}
                  </p>

                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
                      <FiCode className="text-blue-500" />
                      {content.sections.about.skillsTitle}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {content.sections.about.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-white dark:bg-gray-700 shadow-sm rounded-full flex items-center gap-2 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all"
                        >
                          {skillIcons[skill] || (
                            <FiCode className="text-gray-500" />
                          )}
                          <span className="text-gray-700 dark:text-gray-200">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Experience Section */}
                  {content.sections.experience && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
                        <FiBriefcase className="text-blue-500" />
                        {content.sections.experience.title}
                      </h3>
                      <div className="space-y-6">
                        {content.sections.experience.items.map((exp, index) => (
                          <div
                            key={index}
                            className="pl-6 border-l-2 border-blue-200 dark:border-blue-900"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                              <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                                {exp.position}
                              </h4>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {exp.duration}
                              </span>
                            </div>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                              {exp.company}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">
                              {exp.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              )}

              {activeSection === "portfolio" && (
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    {content.sections.portfolio.title}
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {content.sections.portfolio.items.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-600"
                      >
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-gray-700 dark:text-gray-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="flex gap-3">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-primary"
                            >
                              <FiExternalLink className="mr-1" />
                              {isEnglish ? "Live Demo" : "دموی زنده"}
                            </a>
                            <a
                              href={item.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-outline border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                              <FiGithub className="mr-1" />
                              GitHub
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 p-4 text-center text-sm border-t border-gray-200 dark:border-gray-700">
          <p>{content.sections.footer}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
