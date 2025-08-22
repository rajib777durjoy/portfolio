import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen  py-20 text-gray-300"
    >
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-16"
      >
        About Me
      </motion.h1>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-700 shadow-lg shadow-blue-900 flex-shrink-0"
        >
          <img
            src="/durjoy_chando_image.png"
            alt="Durjoy Chando"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 text-blue-200"
        >
          <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-4 text-justify">
            I'm a passionate <span className="text-blue-400 font-semibold">Web Developer</span> specializing in building dynamic and responsive websites using <span className="font-medium">HTML, CSS, JavaScript, and React</span>. I break projects into manageable tasks, write clean, maintainable code, and can handle projects from start to finish.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
            I also have hands-on experience with the <span className="text-blue-400 font-semibold">MERN stack</span>, which allows me to collaborate efficiently with backend teams. Currently pursuing my 2nd year of a BSS degree at National University, I strongly believe in continuous learning and solving real-world problems with code.
          </p>
        </motion.div>
      </div>

      {/* Hobbies / Skills Section */}
      <div className="mt-24 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-12"
        >
          My Hobbies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 justify-items-center">
          {/* Hobby Card */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,112,244,0.5)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center bg-[#001e3c] border border-blue-800 p-6 rounded-xl shadow-md w-52"
          >
            <img src="/batsman.png" alt="Cricket" className="w-24 h-24 mb-4" />
            <p className="text-center text-sm md:text-base font-semibold text-blue-300">
              Playing Cricket
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,112,244,0.5)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center bg-[#001e3c] border border-blue-800 p-6 rounded-xl shadow-md w-52"
          >
            <img src="/programming.png" alt="Programming" className="w-24 h-24 mb-4" />
            <p className="text-center text-sm md:text-base font-semibold text-blue-300">
              Programming
            </p>
          </motion.div>

          {/* <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,112,244,0.5)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center bg-[#001e3c] border border-blue-800 p-6 rounded-xl shadow-md w-52"
          >
            <img src="/reading.png" alt="Reading" className="w-24 h-24 mb-4" />
            <p className="text-center text-sm md:text-base font-semibold text-blue-300">
              Reading
            </p>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
