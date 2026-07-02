import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section
      id="skills"
      className="w-full py-24 bg-[#020617]"
    >
      {/* Title */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Technologies I use to build scalable, high-quality full-stack
          applications
        </p>
      </div>

      {/* Skills */}
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 px-4">
        {data.map((item, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.08 }}
            className="
              cursor-default
              px-5 py-2.5
              rounded-full
              text-sm md:text-base
              font-medium
              border border-gray-700
              text-gray-300
              bg-[#020617]
              hover:text-cyan-400
              hover:border-cyan-400
              hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
              transition-all duration-300
            "
          >
            {item.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;

