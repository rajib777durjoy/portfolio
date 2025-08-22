
import React, { useEffect, useState } from 'react';
import { motion } from "motion/react"
import StarBorder from '../Skills/BorderEffect'
import { div } from 'motion/react-client';
const Skills = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/skills.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log('data:', data)
    return (
        <section
            id="skills"
            className="w-full min-h-[450px]  py-16 px-6"
        >
            <h2 className="text-3xl font-extrabold text-center text-sky-400 mb-12 tracking-wide">
                My Skills
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                        className="flex flex-col items-center bg-black border border-blue-800 rounded-xl shadow-lg shadow-blue-900 p-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={item.Icon}
                            alt={item.name}
                            className="w-16 h-16 object-contain mb-4 filter brightness-125"
                            loading="lazy"
                            draggable={false}
                        />
                        <h3 className="text-sky-400 text-lg font-semibold">{item.name}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;