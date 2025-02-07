import React from 'react';
import { FaCss3Alt, FaHtml5, FaNode, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
    return (
        <div id='skills' className='w-[100%] min-h-[300px] mb-10'>
            <h1 className='text-4xl text-center text-white'>Skills</h1>
            <div className='w-[90%] mx-auto my-5 grid gap-4 md:grid-cols-4'>
                <div className='text-white hover:bg-cyan-500 h-[100px] border rounded-full'>
                    <FaHtml5 className='text-4xl text-white mx-auto my-2' />
                    <h1>Html</h1>
                </div>
                <div className='text-white hover:bg-cyan-500 h-[100px] border rounded-full'>
                  <FaCss3Alt className='text-4xl text-white mx-auto my-2' />
                    <h1>CSS</h1>
                </div>
                <div className='text-white hover:bg-cyan-500 h-[100px] border rounded-full'>
                <SiTailwindcss className='text-4xl text-white mx-auto my-2' />
                    <h1>Tailwind</h1>
                </div>
                <div className='text-white hover:bg-cyan-500 h-[100px] border rounded-full'>
                <IoLogoJavascript className='text-4xl text-white mx-auto my-2' />
                    <h1>JavaScript</h1>
                </div>
                <div className='text-white hover:bg-cyan-500 h-[100px] border rounded-full'>
                <FaReact className='text-4xl text-white mx-auto my-2' />
                    <h1>React.js</h1>
                </div>
                <div className='text-white hover:bg-cyan-500 h-[100px] border rounded-full'>
                <FaNode className='text-4xl text-white mx-auto my-2' />
                    <h1>Node.js</h1>
                </div>
                <div className='text-white hover:bg-cyan-500 h-[100px] border rounded-full'>
                <SiExpress className='text-4xl text-white mx-auto my-2' />
                    <h1>Express.js</h1>
                </div>
                <div className='text-white hover:bg-cyan-500 h-[100px] border rounded-full'>
                <SiMongodb className='text-4xl text-white mx-auto my-2' />
                    <h1>MonogDB</h1>
                </div>
            </div>
        </div>
    );
};

export default Skills;