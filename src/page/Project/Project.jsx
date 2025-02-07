import React from 'react';
import project from '../../assets/project_12image.png'
import { useNavigate } from 'react-router-dom';

const Project = () => {
    const navigate=useNavigate()
    return (
        <div id='project' className='w-[100%] min-h-[500px] my-6'>
            <h1 className='text-center text-4xl text-white'>Projects</h1>
            <div className="card bg-base-100  shadow-xl">
                <figure className="md:px-10 ">
                    <img
                        src={project}
                        alt="Shoes"
                        className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Project Name: Fitness Zone</h2>
                    <div className="card-actions">
                        <button onClick={()=>{ navigate('/detailsPage')}} className="btn btn-primary">View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;