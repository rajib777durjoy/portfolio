import React from 'react';

import { motion } from "motion/react"
const About = () => {
    return (
        <div
            id="about"
            className="w-full min-h-screen bg-gradient-to-br from-black via-[#001630] to-[#000814] py-16 text-gray-300"
        >
            <h1 className="text-4xl font-bold text-center text-blue-400 mb-10">About Me</h1>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-700 shadow-lg shadow-blue-900"
                >
                    <img
                        src="/durjoy_chando_image.png"
                        alt="Durjoy Chando"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* About Text */}
                <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="text-sm md:text-base lg:text-lg leading-relaxed text-justify lg:max-w-2xl text-blue-200"
                >
                    I am a front-end developer passionate about building dynamic and responsive websites using HTML, CSS, JavaScript, and React. I plan projects carefully, break them into tasks, and write clean, maintainable code. I can manage projects from start to finish and troubleshoot bugs using logical thinking and online resources.
                    <br />
                    <br />
                    I also have a good understanding of the MERN stack which helps me collaborate better with back-end development. Currently, I am pursuing my 2nd year of a BSS degree at National University. I believe in continuous learning and solving real-world problems with code.
                </motion.p>
            </div>

            {/* Hobbies Section */}
            <div className="mt-20">
                <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">My Hobbies</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
                    {/* Hobby 1 - Cricket */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="flex flex-col items-center bg-[#001e3c] border border-blue-800 p-5 rounded-xl shadow-[0_4px_10px_rgb(0,70,160,0.6)] w-40"
                    >
                        <img src="/batsman.png" alt="Cricket" className="w-24 h-24 mb-3" />
                        <p className="text-center text-sm font-semibold text-blue-300">Playing Cricket</p>
                    </motion.div>

                    {/* Hobby 2 - Programming */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="flex flex-col items-center bg-[#001e3c] border border-blue-800 p-5 rounded-xl shadow-[0_4px_10px_rgb(0,70,160,0.6)] w-40"
                    >
                        <img src="/programming.png" alt="Programming" className="w-24 h-24 mb-3" />
                        <p className="text-center text-sm font-semibold text-blue-300">Programming</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;