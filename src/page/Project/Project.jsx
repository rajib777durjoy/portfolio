import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Style.css'
import { div } from 'motion/react-client';
import { Link } from 'react-router-dom';
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
    return (
        <div id='project' className='w-[100%] min-h-[500px] my-10 '>
            <h1 className='text-center text-xl lg:text-2xl text-white my-4'>Projects</h1>
            <div className='grid md:grid-cols-2 gap-6 mt-10 lg:mt-20 '>
                <div className='rounded-lg min-h-[500px] border-t-4 border-sky-200 relative shadow shadow-sky-200'>
                    <img src={project[value]?.image} alt="" className='w-[100%] rounded-md h-[100%] ' />
                    <div className='absolute bottom-[40%] flex justify-between w-[100%]'>
                        <button onClick={() => {
                            setValue(value > 0 ? value - 1 : value + project.length - 1)
                        }} className='btn bg-slate-100 border-0 text-black hover:text-white'>Prev</button>
                        <button onClick={() => {
                            setValue(value < project.length - 1 ? value + 1 : 0)
                        }} className='btn bg-slate-100 text-black hover:text-white border-0'>Next</button>
                    </div>
                  
                </div>
                <div className='shadow border-t-4 border-sky-200 shadow-sky-200 rounded-lg min-h-[500px] '>
                    <div className='mt-6 text-2xl '>
                        <h1 className='text-center font-semibold text-sky-400 mt-2 mb-4'>{project[value]?.name}</h1>
                        <hr className='mx-2' />
                        <h2 className='text-center text-white font-semibold text-lg mt-2'>Description</h2>
                        <hr className='mx-2' />
                        <p className='text-xs text-white ms-2  py-4'>{project[value]?.description}</p>

                        <h2 className='text-center text-lg text-white font-semibold'>Chellange</h2>
                        <hr className='mx-2' />
                        <p className='text-xs text-white  ms-2 py-4'>
                            {project[value]?.challenge}
                        </p>
                        <h2 className='text-white text-center text-lg '>futurePlan</h2>
                        <hr className='mx-2' />
                        <p className='text-xs text-white  ms-2 py-4'>{project[value]?.futurePlan}</p>
                        <hr className='mx-2' />
                        <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-2 mx-2'>
                            {project[value]?.skills?.map(item => (<div className='btn  border-sky-300 mt-2'>
                                {item}
                            </div>))}
                        </div>
                    </div>
                    <div className='w-[50%] lg:w-[20%] mx-auto my-2'>
                        <button className='cursor-pointer border w-[100%] border-sky-300 hover:border-black hover:text-sky-200 text-white p-2 rounded-lg '><Link to={project[value]?.liveLink} target='_blank'>View Project</Link></button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Project;