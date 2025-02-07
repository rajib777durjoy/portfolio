import React from 'react';
import { Link } from 'react-router-dom';

const Detailspage = () => {
    return (
        <div className='w-[100%]'>
            <h1 className='text-2xl text-center text-white'>Project Details</h1>
            <div className="hero bg-base-200 ">
                <div className="hero-content text-center">
                <div className='w-[90%] mx-auto'>
                <p className='text-2xl text-center my-2'>Main technology stack used:</p>
                <div className='grid grid-cols-3 gap-4'>
                    <button className='btn bg-cyan-500 text-black mx-2'>React.js</button>
                    <button className='btn bg-cyan-500 text-black mx-2'>Node.js</button>
                    <button className='btn bg-cyan-500 text-black mx-2'>Express.js</button>
                    <button className='btn bg-cyan-500 text-black mx-2'>MongoDB</button>
                    <button className='btn bg-cyan-500 text-black mx-2'>Firebase</button>
                </div>
                <h1 className='text-2xl text-start text-white my-2 '>Live project link:
                    <Link to='https://assignment12-f557e.web.app' className='hover:text-blue-400 underline cursor-pointer mx-1'>FitnessZone</Link>
                </h1>
                <h1 className='text-2xl text-start text-white'>GitHub repository link:
                    <Link to='https://github.com/rajib777durjoy/assignment12' className='hover:text-blue-400 cursor-pointer underline mx-1'>github repository link</Link>
                </h1>
                
            </div>
            <div className='w-[90%] mx-auto '>
                <h1 className='text-2xl text-white'>Description:</h1>
                <p className='text-start'>Fitness Zone is a comprehensive fitness tracking platform designed to help users monitor their health and fitness journey effectively. Built with React.js for a dynamic and responsive front-end, Node.js and Express.js for a scalable and efficient backend, and MongoDB for secure and flexible data management, Fitness Zone ensures a seamless user experience. The platform integrates Firebase authentication for secure user access, allowing individuals to log workouts, set goals, track progress, and receive personalized fitness recommendations. Whether for beginners or seasoned fitness enthusiasts, Fitness Zone provides a user-friendly and interactive way to stay on top of fitness goals.</p>
               <h1 className='text-2xl text-white text-start mt-2'> Challenges faced while developing the project:</h1>
                <li className='text-start list-decimal'>Challenge: Implementing secure authentication while ensuring a smooth user experience.</li>
                <li className='text-start list-decimal'>Challenge: Managing complex user data like workout history, goals, and progress efficiently.</li>
                <li className='text-start list-decimal'>Challenge: Structuring data for fast queries, especially when handling large user workout logs.</li>
                <li className='text-start list-decimal'>Challenge: Structuring data for fast queries, especially when handling large user workout logs.</li>
                <li className='text-start list-decimal'>Challenge: Structuring data for fast queries, especially when handling large user workout logs.</li>
                <h1 className='text-2xl text-start text-white'>Potential improvements and future plans for the project:</h1>
                <li className='text-start list-disc '>Add a forum or chat system where users can interact, share progress, and challenge each other.</li>
                <li className='text-start list-disc '>Sync data from smartwatches (like Fitbit, Apple Watch) for real-time fitness tracking</li>
                <li className='text-start list-disc '>Introduce a premium version with exclusive workout programs, live coaching, and AI recommendations</li>
                <li className='text-start list-disc '>Provide live training sessions and a video library for different fitness programs.</li>
                <li className='text-start list-disc '>Implement a reward system where users earn points for workouts and milestones.</li>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Detailspage;