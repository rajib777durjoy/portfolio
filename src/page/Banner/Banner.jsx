import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import '../Banner/Bg.css'
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import developermMode from '../../../src/assets/developerMode.json'
import { Sparkles } from '../Banner/Sparkle';
import SplitText from "../Banner/SplitText";

const Banner = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
         <div className="min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-[#001f4d] to-black text-white">
            {/* Top Decorative Sparkle Section */}
            <div className="relative h-[250px] w-full overflow-hidden
                [mask-image:radial-gradient(50%_50%,white,transparent)] 
                before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#003a8c,transparent_90%)] before:opacity-90
                after:absolute after:border-2 after:-left-1/2 after:top-1/2 after:aspect-[1/1.8] after:w-[200%] after:rounded-[50%] after:border-b after:border-[#404a7e88] after:bg-zinc-900
            ">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#001f4d_1px,transparent_1px),linear-gradient(to_bottom,#002b6e_1px,transparent_1px)] bg-[size:70px_80px] opacity-40"></div>
                <Sparkles
                    density={400}
                    size={1.4}
                    direction="top"
                    className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
                />
            </div>

            {/* Main Content */}
            <div className='flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 mt-[-160px] lg:mt-20 mb-20'>

                {/* Left Text Section */}
                <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left">
                    <SplitText
                        text="Hi! I am Durjoy Chando"
                        className="text-3xl lg:text-4xl font-bold tracking-wide mb-4 text-[#00aaff]"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                    <article className="mx-auto lg:mx-0 max-w-md lg:max-w-none text-white/90">
                        <h1 className='text-2xl lg:text-3xl font-semibold mb-3'>
                            I am a{' '}
                            <span style={{ color: '#00aaff', fontWeight: 'bold' }}>
                                <Typewriter
                                    words={['Frontend Developer', 'MERN Stack Developer', 'React Developer']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    multiTextLoop
                                />
                            </span>
                        </h1>
                        <p className='text-base lg:text-lg leading-relaxed text-gray-300 px-4 lg:px-0'>
                            I am a front-end developer. I can build dynamic and responsive websites. I work with HTML, CSS, JavaScript, and React. I always try to make user-friendly designs. I also have basic knowledge of the MERN stack. I like to write clean and good code.
                        </p>
                    </article>
                </div>

                {/* Right Animation Section */}
                <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0'>
                    <Lottie className='w-4/5 lg:w-full max-w-lg' animationData={developermMode} />
                </div>
            </div>
        </div>
    )

};

export default Banner;