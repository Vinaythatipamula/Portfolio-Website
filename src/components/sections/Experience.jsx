import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useSelector } from 'react-redux';
import { experiencesData } from '../../data/portfolioData';

const Experience = () => {
  const { theme: _theme } = useSelector((state) => state.ui);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="section-padding bg-secondary-50 dark:bg-secondary-800">
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
            Work <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-700 hidden md:block" />

            {experiencesData.map((experience, _index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-start gap-6">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-white dark:bg-secondary-800 rounded-full border-4 border-primary-500 shadow-lg z-10">
                    <div className="w-3 h-3 bg-primary-500 rounded-full" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="card p-6 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-secondary-800 dark:text-secondary-200 mb-1">
                            {experience.title}
                          </h3>
                          <div className="flex items-center gap-2 text-secondary-600 dark:text-secondary-400">
                            <MapPin className="w-4 h-4" />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mt-2 sm:mt-0">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{experience.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: techIndex * 0.05 }}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full border border-primary-200 dark:border-primary-800"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Interested in working together?
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's connect and see how we can work together!
            </p>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
