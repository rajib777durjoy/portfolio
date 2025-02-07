import React from 'react';
import profile from '../../assets/profileImg.png'
const About = () => {
    return (
        <div id="about" className='w-[100%] min-h-[600px]'>
            <h1 className='text-4xl text-center text-white my-4'>About</h1>
            <div className=" h-[100%] md:flex justify-between items-center">
            <p className='text-start text-white w-[100%] min-h-[200px] md:w-[50%] font-semibold'>I am a passionate Front-End developer who thrives on solving challenges and pushing the limits of creativity. I enjoy programming because it sharpens my thinking, enhances problem-solving skills, and empowers me to handle complex situations with confidence. For me, coding isn't just about building applications—it's about discovering new ways to think, adapt, and innovate in an ever-evolving digital world.Outside of programming, I have a strong passion for cricket and sports. Whether it's playing or watching, I love the energy, strategy, and teamwork that sports bring. Just like in coding, I enjoy pushing my limits, learning from challenges, and striving for continuous improvement. My dedication to both technology and sports reflects my belief that with determination and the right mindset, anything is achievable.</p>
               <div className='md:w-[30%] h-[350px] border-2 my-4 rounded-md'>
                 <img src={profile} alt="" className='w-[100%] h-[100%] mx-auto ' />
               </div>
            </div>
        </div>
    );
};

export default About;