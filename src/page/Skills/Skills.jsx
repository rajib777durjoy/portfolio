
import React, { useEffect, useState } from 'react';
import { motion } from "motion/react"

const Skills = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/skills.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log('data:', data)
    return (
        <div id='skills' className='w-[100%] lg:min-h-[400px]'>
            <h1 className='lg:text-2xl text-xl text-white text-center'>Skills</h1>
            <div className='w-[100%] grid grid-cols-4 gap-4 mt-10 '>
               {
                 data.map((item,index)=>(
                   
                        <motion.div
                         initial={{opacity:1,scale:0.8}}
                         whileHover={{opacity:0.9,scale:0.9}}
                         transition={{duration:0.5}}
                         className='text-center text-xs md:text-lg border w-[70px] md:w-auto my-4 h-[50px] pt-3 font-bold rounded-lg  mx-2 border-t-4 border-t-sky-300'>{item.name}</motion.div>
                 ))
               }
            </div>



        </div>
    );
};

export default Skills;