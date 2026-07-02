import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  return (
    <div className="w-full min-h-screen  px-5 py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          My Projects
        </h2>
        <p className="text-gray-400 mt-2">
          Some of my recent works & case studies
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {project?.map((item, index) => (
          <div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className=""
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-md h-[220px] my-2">
              <img
                src={item?.image}
                alt={item?.title || item?.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Content */}
            <motion.div
            key={index}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          className=" border border-gray-800 rounded-md shadow-lg hover:shadow-cyan-500/30 hover:border-cyan-400 p-5 flex flex-col h-[240px]">
              <h3 className="text-lg font-semibold text-white mb-2">
                {item?.title || item?.name}
              </h3>

              <p className="text-gray-400 text-sm flex-grow">
                {item?.description?.slice(0, 150)}...
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-4 mt-4">
                <a
                  href={item?.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
                >
                  Live <FaExternalLinkAlt />
                </a>

                <a
                  href={item?.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-md border border-gray-600 text-gray-300 hover:text-white hover:border-white transition"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
