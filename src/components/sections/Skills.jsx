import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { DiHtml5, DiCss3, DiMysql } from "react-icons/di";
import { FaJs, FaReact, FaPython, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMui,
  SiReactrouter,
  SiRedux,
  SiAxios,
  SiVercel,
  SiNetlify,
  SiNpm,
  SiVite,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { GiAbstract050 } from "react-icons/gi";

const Skills = () => {
  const { theme: _theme } = useSelector((state) => state.ui);

  const skillsData = [
    // Frontend
    { name: "HTML5", image: <DiHtml5 color="#E34F26" /> },
    { name: "CSS3", image: <DiCss3 color="#1572B6" /> },
    { name: "JavaScript (ES6+)", image: <FaJs color="#F7DF1E" /> },
    { name: "React.js", image: <FaReact color="#61DAFB" /> },
    { name: "Tailwind CSS", image: <SiTailwindcss color="#38BDF8" /> },
    { name: "Material UI", image: <SiMui color="#007FFF" /> },
    { name: "React Router DOM", image: <SiReactrouter color="#CA4245" /> },
    { name: "Redux Toolkit", image: <SiRedux color="#764ABC" /> },
    { name: "Responsive Design", image: <GiAbstract050 color="#10B981" /> },
    { name: "Axios", image: <SiAxios color="#671DDF" /> },

    // Backend Exposure
    { name: "Python", image: <FaPython color="#3776AB" /> },
    { name: "MySQL", image: <DiMysql color="#00758F" /> },

    // Tools & DevOps
    { name: "Git", image: <FaGitAlt color="#F1502F" /> },
    { name: "GitHub", image: <BsGithub color="#181717" /> },
    { name: "Vercel", image: <SiVercel color="#000000" /> },
    { name: "Netlify", image: <SiNetlify color="#00C7B7" /> },
    { name: "npm", image: <SiNpm color="#CB3837" /> },
    { name: "Vite", image: <SiVite color="#646CFF" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const itemVariants1 = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="about"
      className="section-padding bg-white dark:bg-secondary-900"
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-5xl text-blue-500"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants1}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <div className="text-6xl">{skill.image}</div>
              <p className="text-sm font-medium text-gray-600">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
