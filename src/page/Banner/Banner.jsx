import React from 'react';
import profile from '../../assets/profileImg.png'
import { FaFacebookSquare, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Banner = () => {
    return (
        <div className='w-[100%] min-h-[500px] md:flex justify-around items-center py-10 mb-5'>
            <div className='w-[100%] md:w-[50%]'>
                <h1 className='text-4xl text-slate-300 text-start my-2'>🙋‍♂️Hi !</h1>
                <h2 className='text-3xl text-slate-300 text-start my-2'>I'm DurjoyChando</h2>
                <p className='text-2xl text-slate-300 text-start'>Front-End Developer</p>
                <p className='w-[100%] text-start my-2'>I am a passionate Front-End Developer specializing in React.js with a strong command over HTML, CSS, JavaScript, and Tailwind CSS. I excel at creating dynamic, responsive, and user-friendly web applications with a keen eye for design and performance.</p>
                <div className='w-[100%] grid grid-cols-4 mt-4'>
                    <a href='https://github.com/rajib777durjoy' target='_blank'>
                        <FaGithub className='text-2xl' />
                    </a>
                    <a href='https://www.linkedin.com/in/durjoy-chando-4a9878317' target='_blank'>
                        <FaLinkedin className='text-2xl' />
                    </a>
                    <a href='https://x.com/DurjoyChando' target='_blank'>
                        <FaTwitter className='text-2xl' />
                    </a>
                    <a href="https://www.facebook.com/durjoy.chando.2024" target='_blank'>
                        <FaFacebookSquare className='text-2xl' />
                    </a>
                </div>
                <div className='w-[50%] mx-auto md:mt-20 my-6'>
                    <a href='http://localhost:5173' download='resume.jpg'><button className='btn w-[100%] bg-cyan-500 text-black'>Resume</button></a>
                </div>
            </div>
            <div className=''>
                <img src={profile} alt="" className='w-[300px] h-[300px] border border-slate-500 rounded-full' />
            </div>
        </div>
    );
};

export default Banner;