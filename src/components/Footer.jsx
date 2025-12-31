import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode } from "react-icons/si";
import { Heart, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/vinay-thatipamula',
      color: 'text-blue-600 hover:text-blue-700',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Vinaythatipamula',
      color: 'text-secondary-600 dark:text-secondary-300 hover:text-secondary-800 dark:hover:text-secondary-100',
    },
    {
      name: 'Leetcode',
      icon: SiLeetcode,
      href: 'https://leetcode.com/u/vinay11q/',
      color: 'text-orange-600 hover:text-orange-600',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:vinaythatipamula7@gmail.com',
      color: 'text-red-600 hover:text-red-700',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary-900 px-2 md:px-2 lg:px-4 dark:bg-black text-white">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  Vinay Thatipamula
                </span>
              </h3>
              <p className="text-secondary-300 mb-6 max-w-md leading-relaxed">
                Frontend Engineer with Full-Stack Expertise. I build fast, accessible, 
                and SEO-friendly web applications using modern technologies.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-secondary-800 hover:bg-secondary-700 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-secondary-300">
                <div>
                  <p className="font-medium text-white mb-1">Email</p>
                  <a 
                    href="mailto:yashkapure06@gmail.com"
                    className="hover:text-primary-400 transition-colors duration-300"
                  >
                    vinaythatipamula7@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Location</p>
                  <p>Hyderabad, India</p>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Availability</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400">Available for work</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-secondary-800 py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-400 text-sm">
              © {currentYear} VinayThatipamul. All rights reserved.
            </p>
            <motion.p
              className="text-secondary-400 text-sm flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React & Redux Toolkit
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary-400/10 rounded-full blur-xl" />
      </div>
    </footer>
  );
};

export default Footer;
