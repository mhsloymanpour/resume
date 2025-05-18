import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileImage from "./picture/1000015333.jpg";

const Resume = () => {
  const [isEnglish, setIsEnglish] = useState(true); // حالت پیشفرض انگلیسی
  const [activeSection, setActiveSection] = useState("about"); // 'about' یا 'portfolio'

  // English content
  const englishContent = {
    header: {
      name: "Mohammad hoseyn soleymanpour",
      title: "Senior Frontend Developer",
      email: "mamadpkfr@gmail.com",
      phone: "09923137379",
      location: "Iran/Ardabil",
      website: "Website",
    },
    sections: {
      about: {
        title: "About Me",
        description:
          "Frontend developer specialized in React, with a strong focus on building clean, modern, and responsive user interfaces. Experienced in working with various APIs and client-side development concepts, with a detail-oriented and problem-solving mindset. Passionate about learning new technologies and contributing to professional projects that combine technical growth with effective teamwork",
        skillsTitle: "Technical Skills",
        skills: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "vite",
          "Html",
          "css",
          "javaScript",
        ],
      },
      portfolio: {
        title: "Portfolio",
        items: [
          {
            title: "E-commerce Platform",
            description:
              "A full-featured online store with React, Node.js, and MongoDB",
            technologies: ["React", "Node.js", "MongoDB", "Redux"],
            link: "https://example.com/ecommerce",
          },
          {
            title: "Task Management App",
            description:
              "Productivity application with real-time updates and team collaboration",
            technologies: ["React", "Firebase", "Material UI"],
            link: "https://example.com/taskapp",
          },
        ],
      },
      footer: `© ${new Date().getFullYear()} Mohammad hoseyn soleymanpour. All rights reserved.`,
    },
  };

  // Persian (Farsi) content
  const persianContent = {
    header: {
      name: "محمد حسین سلیمانپور",
      title: "توسعه دهنده ارشد فرانت اند",
      email: "mamadpkfr@gmail.com",
      phone: "۰۹۹۲۳۱۳۷۳۷۹",
      location: "ایران/اردبیل",
      website: "وبسایت",
    },
    sections: {
      about: {
        title: "درباره من",
        description:
          "توسعه‌دهنده‌ی فرانت‌اند با تخصص در کتابخانه‌ی React و تمرکز بر طراحی و پیاده‌سازی رابط‌های کاربری مدرن، مینیمال و واکنش‌گرا. مسلط به کار با APIهای مختلف و مفاهیم توسعه سمت کلاینت، با رویکردی دقیق، مسئولانه و مبتنی بر حل مسئله. علاقه‌مند به یادگیری فناوری‌های نوین و مشارکت در پروژه‌های حرفه‌ای که تجربه‌ی کار تیمی و رشد فنی را در کنار هم فراهم می‌کنند.",
        skillsTitle: "مهارت‌های فنی",
        skills: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "vite",
          "Html",
          "css",
          "javaScript",
          "Git",
        ],
      },
      portfolio: {
        title: "نمونه کارها",
        items: [
          {
            title: "پلتفرم تجارت الکترونیک",
            description:
              "فروشگاه آنلاین کامل با ری‌اکت، نود.جی‌اس و مانگو دی‌بی",
            technologies: ["React", "Node.js", "MongoDB", "Redux"],
            link: "https://example.com/ecommerce",
          },
          {
            title: "اپلیکیشن مدیریت وظایف",
            description:
              "برنامه مدیریت کارها با بروزرسانی لحظه‌ای و قابلیت کار تیمی",
            technologies: ["React", "Firebase", "Material UI"],
            link: "https://example.com/taskapp",
          },
        ],
      },
      footer: `© ${new Date().getFullYear()} محمد حسین سلیمانپور. تمام حقوق محفوظ است.`,
    },
  };

  const content = isEnglish ? englishContent : persianContent;
  const dir = isEnglish ? "ltr" : "rtl";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8"
      dir={dir}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Header Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-95"></div>
          <div className="relative z-10 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center">
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg overflow-hidden mb-6 md:mb-0 md:mr-8"
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
                    <p className="text-xl md:text-2xl font-medium opacity-90 mb-4">
                      {content.header.title}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsEnglish(!isEnglish)}
                    className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all"
                  >
                    {isEnglish ? "فارسی" : "English"}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <span>{content.header.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>{content.header.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>{content.header.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>{content.header.website}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto">
            <button
              onClick={() => setActiveSection("about")}
              className={`px-6 py-4 font-medium text-sm focus:outline-none whitespace-nowrap transition-colors ${
                activeSection === "about"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {isEnglish ? "About & Skills" : "درباره من و مهارت‌ها"}
            </button>
            <button
              onClick={() => setActiveSection("portfolio")}
              className={`px-6 py-4 font-medium text-sm focus:outline-none whitespace-nowrap transition-colors ${
                activeSection === "portfolio"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {content.sections.portfolio.title}
            </button>
          </nav>
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
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    {content.sections.about.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-8">
                    {content.sections.about.description}
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {content.sections.about.skillsTitle}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {content.sections.about.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {activeSection === "portfolio" && (
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    {content.sections.portfolio.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {content.sections.portfolio.items.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="group bg-gray-50 hover:bg-white rounded-xl p-6 transition-all shadow-sm hover:shadow-md border border-gray-100"
                      >
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                        >
                          {isEnglish ? "View Project" : "مشاهده پروژه"}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 text-gray-500 p-4 text-center text-sm">
          <p>{content.sections.footer}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
