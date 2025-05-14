import React from 'react';
import profile from '../../assets/profileImg.png'
import { motion } from "motion/react"
const About = () => {
    return (
        <div
         id="about" className='w-[100%] min-h-[500px] '>
            <h1 className='text-xl lg:text-2xl text-center text-white'>About</h1>
            <div className=" w-[100%] h-[100%] border-t-4 border-sky-200 rounded-lg shadow shadow-sky-200 md:flex flex-row-reverse px-2 justify-between items-center mt-10">
            <motion.p
         initial={{opacity:0,scale:0.7}}
         whileInView={{opacity:1,scale:[0.8,0.9,1]}}
         transition={{duration:1.5}} className='text-start text-slate-300 w-[90%] mx-auto lg:w-[60%] text-xs lg:text-lg min-h-[200px] md:w-[50%] '>I am a passionate Front-End developer who thrives on solving challenges and pushing the limits of creativity. I enjoy programming because it sharpens my thinking, enhances problem-solving skills, and empowers me to handle complex situations with confidence. For me, coding isn't just about building applications—it's about discovering new ways to think, adapt, and innovate in an ever-evolving digital world.Outside of programming, I have a strong passion for cricket and sports. Whether it's playing or watching, I love the energy, strategy, and teamwork that sports bring. Just like in coding, I enjoy pushing my limits, learning from challenges, and striving for continuous improvement. My dedication to both technology and sports reflects my belief that with determination and the right mindset, anything is achievable.</motion.p>
               <motion.div
               initial={{opacity:0,scale:0.7}}
               whileInView={{opacity:1,scale:[0.8,0.9,1]}}
               transition={{duration:1.5}} 
               className='md:w-[30%] md:h-[350px]  lg:shadow shadow-sky-200 my-4  rounded-lg'>
                 <img src={profile} alt="" className='w-[70%] md:w-[100%] h-[100%] mx-auto ' />
               </motion.div>
            </div>
        </div>
    );
};

export default About;