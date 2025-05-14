import React from 'react';
import profile from '../../assets/profileImg.png'
import { FaFacebook, FaGithub, FaLinkedin,} from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import '../Banner/Bg.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='w-[100%] lg:min-h-screen md:flex justify-between mb-5'>
            <div className='w-[100%]  mx-auto min-h-[350px] mt-[150px]  shadow shadow-slate-400 z-20 rounded-lg'>
                <h1 className='text-lg md:text-2xl lg:w-[60%] mx-auto font-bold  md:my-5 px-5 text-white'>HI, I'm Durjoy Chando</h1>
                <div className='text-2xl lg:w-[60%] mx-auto font-bold md:mt-5'>
                    <span className='px-5 text-xl text-sky-600' style={{ color: '', fontWeight: 'bold' }}>
                        <Typewriter className="mx-2 text-xl"
                            words={['FrontEnd Developer','MERN Stack Developer']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </div>
                <p className='text-md lg:w-[60%] mx-auto text-slate-300 text-start px-5 mt-4'>
                <Typewriter className="mx-2"
                            words={['I am a MERN Stack and Front-End Developer with experience in building dynamic,responsive web applications.']}
                            loop={1}
                            cursor
                            cursorStyle=''
                            typeSpeed={10}
                            
                            delaySpeed={1000}
                        />
                </p>
                <p className='text-md lg:w-[60%] mx-auto text-slate-300 text-start px-5 '>
                <Typewriter className="mx-2"
                            words={['My expertise includes React.js for intuitive user interfaces, Node.js and MongoDB for scalable backends,and']}
                            loop={1}
                            cursor
                            cursorStyle=''
                            typeSpeed={10}
                            
                            delaySpeed={1000}
                        /> 
                </p>
               <p className='text-md lg:w-[60%] mx-auto text-slate-300 text-start px-5 '>
               <Typewriter className="mx-2"
                            words={['Tailwind CSS for fast, responsive designs. I’m also proficient in RESTful APIs and version control with GitHub.']}
                            loop={1}
                            cursor
                            cursorStyle=''
                            typeSpeed={15}
                            
                            delaySpeed={1000}
                        /> 
               </p>
                         
                <p className='text-md lg:w-[60%] mx-auto text-slate-300 text-start px-5 '>
                <Typewriter className="mx-2"
                            words={["Passionate about continuous learning, I'm currently expanding my skill set with AWS, Docker, SQL, and "]}
                            loop={1}
                            cursor
                            cursorStyle=''
                            typeSpeed={20}
                            
                            delaySpeed={1000}
                        /> 
                        
                </p>
                <p className='text-md lg:w-[60%] mx-auto text-slate-300 text-start px-5'>
                <Typewriter className="mx-2"
                            words={['TypeScript to stay on top of industry trends and deliver high-quality, modern web solutions.']}
                            loop={1}
                            cursor
                            cursorStyle=''
                            typeSpeed={25}
                            delaySpeed={1000}
                        /> 
                        
                </p>

                <div className='grid grid-cols-3 w-[40%] md:w-[20%] gap-4  mx-auto mt-5 py-5'>
                    <Link className='border border-sky-400  w-[35px] hover:border-white h-[35px]  rounded-full'><FaGithub    className='text-lg  text-gray-300 text-center mx-auto mt-[8px]'/></Link>
                    <Link className='border border-sky-400  w-[35px] hover:border-white h-[35px]  rounded-full'><FaLinkedin  className='text-lg  text-gray-300 text-center mx-auto mt-[8px]'/></Link>
                    <Link className='border border-sky-400  w-[35px] hover:border-white h-[35px]  rounded-full'><FaFacebook  className='text-lg  text-gray-300 text-center mx-auto mt-[8px]'/></Link>
                   
                </div>
                    
            </div>
        </div>
    );
};

export default Banner;