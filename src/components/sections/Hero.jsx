import React from "react";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import {
  ArrowRight,
  Download,
  Linkedin,
  Github
} from "lucide-react";
import { useSelector } from "react-redux";

const Hero = () => {
  const { theme: _theme } = useSelector((state) => state.ui);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/Vinay_Thatipamula_Resume.pdf";
    link.download = "Vinay_Thatipamula_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-secondary-900 dark:to-secondary-800"
    >
      <div className="container-custom">
        <div className="text-center">
          {/* Profile Image
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <img
                src="/images/profile.jpg"
                alt="Vinay Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-secondary-700 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-500"
              />
            </div>
          </motion.div> */}

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 mt-10"
          >
            Hi I'm <span className="text-gradient">Vinay Thatipamula</span>
            <br />
            <span className="text-secondary-600 dark:text-secondary-300">
              Frontend Developer With backend Exposure
            </span>
          </motion.h1>


          {/* Available Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
              </div>
              <span className="text-sm font-medium text-green-700 dark:text-green-300">
                Available for work!
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            I build fast, responsive, and user-friendly web applications using
            React.js, Tailwind CSS, and Redux Toolkit. As a passionate front-end
            developer, I focus on creating clean, accessible, and SEO-optimized
            interfaces that deliver seamless user experiences. With a strong
            foundation in JavaScript and modern development practices, I aim to
            craft visually appealing and high-performing websites that align
            with real-world business needs.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              onClick={scrollToContact}
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={downloadCV}
              className="btn-secondary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
              <Download className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <motion.a
              href="https://www.linkedin.com/in/vinay-thatipamula"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-secondary-800 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </motion.a>

            <motion.a
              href="https://github.com/Vinaythatipamula"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-secondary-800 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6 text-secondary-600 dark:text-secondary-300" />
            </motion.a>

            <motion.a
              href="https://leetcode.com/u/vinay11q/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-secondary-800 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiLeetcode className="w-6 h-6 text-orange-600" />
            </motion.a>

          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20 animate-pulse" />
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-secondary-200 dark:bg-secondary-700 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-primary-300 dark:bg-primary-700 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-40 right-10 w-12 h-12 bg-secondary-300 dark:bg-secondary-600 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>
    </section>
  );
};

export default Hero;
