import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FaLaptopCode } from "react-icons/fa";
import {
  toggleTheme,
  toggleSidebar,
  setActiveSection,
} from "../store/slices/uiSlice";
import { navigationLinks } from "../data/portfolioData";

const Header = () => {
  const dispatch = useDispatch();
  const { theme, sidebarOpen, activeSection } = useSelector(
    (state) => state.ui
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (hash) => {
    dispatch(setActiveSection(hash.replace("#", "")));
    dispatch(toggleSidebar());

    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
    // Apply dark mode class to html element
    const htmlElement = document.documentElement;
    const newTheme = theme === "light" ? "dark" : "light";
    if (newTheme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 p-2 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <FaLaptopCode className="text-xl"/>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.hash}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.hash);
                }}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.hash.replace("#", "")
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
                {activeSection === link.hash.replace("#", "") && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary-100 dark:bg-primary-900/30 rounded-lg -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleThemeHandler}
              className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-secondary-600 dark:text-secondary-300" />
              ) : (
                <Sun className="w-5 h-5 text-secondary-600 dark:text-secondary-300" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => dispatch(toggleSidebar())}
              className="md:hidden p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {sidebarOpen ? (
                <X className="w-6 h-6 text-secondary-600 dark:text-secondary-300" />
              ) : (
                <Menu className="w-6 h-6 text-secondary-600 dark:text-secondary-300" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={false}
        animate={{
          x: sidebarOpen ? 0 : "-100%",
          opacity: sidebarOpen ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-80 bg-white dark:bg-secondary-900 shadow-xl md:hidden z-50"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="text-xl font-bold text-gradient">Yash Kapure</div>
            <button
              onClick={() => dispatch(toggleSidebar())}
              className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-4">
            {navigationLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.hash}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.hash);
                }}
                className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors duration-300 ${
                  activeSection === link.hash.replace("#", "")
                    ? "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                    : "text-secondary-600 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => dispatch(toggleSidebar())}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        />
      )}
    </motion.header>
  );
};

export default Header;
