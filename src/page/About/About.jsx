import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen py-24 bg-[#020617] text-gray-300"
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-white mb-20"
      >
        About Me
      </motion.h1>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-14 px-4">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-500 blur-xl opacity-20"></div>
          <img
            src="/durjoy_chando_image.png"
            alt="Durjoy Chando"
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover
                       border border-gray-700 shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1"
        >
          <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-400">
            I’m a passionate{" "}
            <span className="text-cyan-400 font-semibold">Web Developer</span>{" "}
            focused on building modern, responsive web applications using{" "}
            <span className="text-gray-200 font-medium">
              HTML, CSS, JavaScript, and React
            </span>
            . I enjoy breaking complex problems into simple, clean, and
            maintainable solutions.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-400">
            I also work with the{" "}
            <span className="text-cyan-400 font-semibold">MERN stack</span>, enabling me to
            build complete, scalable web applications. Alongside my academic studies in
            BSS at National University, I have successfully completed a comprehensive web
            development course from{" "}
            <span className="text-cyan-400 font-semibold">Programming Hero</span>, where I
            gained strong hands-on experience through real-world projects and practical
            problem-solving.
          </p>

        </motion.div>
      </div>

      {/* Certificate Section (ADDED ONLY) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-24 max-w-4xl mx-auto px-4 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Certification
        </h2>

        <div className="bg-[#020617] border border-gray-800 rounded-xl px-6 py-10 shadow-md hover:shadow-cyan-500/30 transition">
          <p className="text-gray-400 mb-4">
            Successfully completed the{" "}
            <span className="text-cyan-400 font-semibold">
              Online Web Development Course
            </span>{" "}
            from Programming Hero.
          </p>

          <a
            href="https://drive.google.com/file/d/1jkZqJ5SGTNomEvyfZpFOtt00k1O9nzD4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-md bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
          >
            View Certificate
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;


