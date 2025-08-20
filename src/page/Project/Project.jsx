import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';

import './Style.css'

const Project = () => {
    // const navigate = useNavigate()
    const [project, setproject] = useState([])
    useEffect(() => {
        fetch('/project.json')
            .then(res => res.json())
            .then(data => setproject(data))
    }, [])
    const [value, setValue] = useState(0)
    console.log('value', value)
    console.log('lenght', project.length - 1)
    const arr = ['mongodb', 'javaScript', 'node.js', 'express.js']
    const cardVariants = {
        offscreen: { opacity: 0, y: 50 },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };
    return (
            <div id='project' className='w-full min-h-[500px] my-10 bg-gradient-to-br from-black via-[#001630] to-[#000814] py-10 text-gray-300'>
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-blue-400">💼 My Featured Projects</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {project?.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-[#0a1a3c] rounded-2xl shadow-md hover:shadow-blue-700/60 border border-blue-800 transition-all duration-300 overflow-hidden flex flex-col"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={cardVariants}
                                whileHover={{ scale: 1.03 }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title || item.name}
                                    className="w-[90%] mx-auto my-4 rounded-lg shadow-lg h-48 object-cover border-2 border-blue-600"
                                />
                                <div className="p-5 flex flex-col flex-grow justify-between">
                                    <div>
                                        <h3 className="text-xl font-semibold text-blue-300 mb-2">
                                            {item.title || item.name}
                                        </h3>

                                        <p className="text-blue-200 text-sm mb-3 line-clamp-3">{item.description}</p>

                                        <div className="mb-3">
                                            <h4 className="text-sm font-semibold text-blue-400">Challenge:</h4>
                                            {Array.isArray(item.challenge) ? (
                                                <ul className="list-disc list-inside text-xs text-blue-300 space-y-1">
                                                    {item.challenge.slice(0, 2).map((c, i) => <li key={i}>{c}</li>)}
                                                </ul>
                                            ) : (
                                                <p className="text-xs text-blue-300 line-clamp-2">{item.challenge}</p>
                                            )}
                                        </div>

                                        {item.futurePlan && (
                                            <div className="mb-3">
                                                <h4 className="text-sm font-semibold text-blue-400">Future:</h4>
                                                <ul className="list-disc list-inside text-xs text-blue-300 space-y-1">
                                                    {item.futurePlan.slice(0, 2).map((f, i) => <li key={i}>{f}</li>)}
                                                </ul>
                                            </div>
                                        )}

                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {item.skills.slice(0, 5).map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs bg-blue-800 text-blue-300 px-3 py-1 rounded-full font-semibold"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mt-6">
                                        <a
                                            href={item.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-blue-400 hover:text-blue-600 underline flex items-center gap-1"
                                        >
                                            Live <FaExternalLinkAlt className="text-base" />
                                        </a>
                                        <a
                                            href={item.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-blue-400 hover:text-blue-600 underline flex items-center gap-1"
                                        >
                                            Code <FaGithub className="text-base" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        );
};

export default Project;