import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import developermMode from "../../../src/assets/developerMode.json";
import { SiCodewars } from "react-icons/si";

const Banner = () => {
  return (
    <section className="relative min-h-screen  text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617] opacity-90"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-cyan-400">Durjoy Chando</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mb-5">
            I'm a{" "}
            <span className="text-cyan-400">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Frontend Developer",
                  "MERN Stack Developer",
                  "React Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
            I specialize in building scalable, modern, and user-centric web applications.
            My experience spans across frontend and backend development using{" "}
            <span className="text-cyan-400 font-medium">
              HTML, CSS, JavaScript, React, Next.js
            </span>{" "}
            on the frontend and{" "}
            <span className="text-sky-400 font-medium">
              Node.js, Express.js, PostgreSQL
            </span>{" "}
            on the backend. I also work with{" "}
            <span className="text-indigo-400 font-medium">
              Drizzle ORM
            </span>{" "}
            to design efficient databases and APIs, focusing on clean architecture,
            performance optimization, and real-world full-stack solutions.
          </p>
          
          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-5 mt-6">
            {/* GitHub */}
            <a
              href="https://github.com/rajib777durjoy"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-11 h-11 rounded-full border border-gray-600 text-gray-400 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
            >
              <FaGithub className="text-xl" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/durjoy-chando-4a9878317"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-11 h-11 rounded-full border border-gray-600 text-gray-400 transition-all duration-300 hover:border-[#0A66C2] hover:text-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.5)]"
            >
              <FaLinkedin className="text-xl" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/durjoy.chando.2024"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-11 h-11 rounded-full border border-gray-600 text-gray-400 transition-all duration-300 hover:border-[#1877F2] hover:text-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.5)]"
            >
              <FaFacebook className="text-xl" />
            </a>

            {/* Codewars */}
            <a
              href="https://www.codewars.com/users/durjoychando2001"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-11 h-11 rounded-full border border-gray-600 text-gray-400 transition-all duration-300 hover:border-[#B1361E] hover:text-[#B1361E] hover:shadow-[0_0_15px_rgba(177,54,30,0.5)]"
            >
              <SiCodewars className="text-xl" />
            </a>
          </div>

        </div>

        {/* Right Animation */}
        <div className="flex justify-center lg:justify-end">
          <Lottie
            animationData={developermMode}
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      {/* Bottom Skills Strip */}
      {/* <div className="relative border-t border-gray-800 bg-[#020617] py-8">
        <div className="max-w-6xl mx-auto px-4">
          <Headline
            text="React • JavaScript • Tailwind CSS • Node.js • Express.js • MongoDB • Firebase • REST API • Next.js"
            speed={120}
            delay={10}
            loop
            className="text-center text-cyan-400 font-semibold tracking-wide text-lg md:text-xl"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Banner;
