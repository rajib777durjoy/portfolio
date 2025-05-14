import { div } from 'motion/react-client';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Detailspage = () => {
    const {id}=useParams()
    const [project,setproject]=useState([])
    console.log('id',id)
    useEffect(()=>{
     fetch('/project.json')
     .then(res=>res.json())
     .then(data=>{
        const result= data.filter(item=>item?.id == id)
        setproject(result)
     })
    },[id])
    console.log(project)
    return (
        <div className='w-[100%] min-h-screen pb-4 bg-gray-900 text-slate-100'>
            <h1 className='text-2xl text-center text-white '>Project Details</h1>
            <div className='w-[90%] mx-auto mt-6'>
                {project?.map(item=><div key={item?.id} className='grid md:grid-cols-2 gap-4' >
                    <div className=''>
                        <img src={item?.image} alt=""  className='rounded-lg shadow-lg shadow-cyan-300'/>
                        <h1 className='my-6 text-center text-2xl font-semibold'>Project:{item?.name}</h1>
                         <div className='w-[100%] flex justify-between '>
                            <Link to=''><button className='btn text-white hover:text-black hover:btn-info'>Github Repository</button></Link>
                            <Link to=''><button className='btn text-white hover:text-black hover:btn-info'>View Live</button></Link>
                         </div>
                        <h1 className='text-center mt-10 mb-2'>Skills</h1>
                        <div className='grid grid-cols-3 gap-2'>
                        {item?.skills?.map(skill=><li className='border hover:bg-cyan-400 hover:text-black hover:border-0 rounded-md text-center list-none'>{skill}</li>)}
                        </div>
                            
                    </div>
                    <div>
                         <h1 className='text-white text-xl font-medium text-center'>Description</h1>
                         <p>{item?.description}</p>
                         <p className='text-center mt-4 text-xl text-white font-medium'>Challenges</p>
                         <div>
                         {item?.challenge?.map((skill,index)=><li className=' hover:bg-cyan-400 hover:text-black hover:border-0 rounded-md  list-none'><span className='mx-1'>{index+1}.</span>{skill}</li>)}
                         </div>
                         <h1 className='text-white text-xl font-medium text-center mt-2'>Future plans for the project</h1>
                         <p>{item?.futurePlan?.map((skill,index)=><li className=' hover:bg-cyan-400 hover:text-black hover:border-0 rounded-md  list-none '><span className='mx-1'>{index+1}.</span>{skill}</li>)}</p>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Detailspage;