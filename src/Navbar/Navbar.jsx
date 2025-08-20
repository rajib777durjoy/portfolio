import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
const Navbar = () => {
    const links = <>
        <li><a href='/'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#project'>Project</a></li>
        <li><a href='#contact'>Contact</a></li>
    </>
    return (
        <div className='w-[100%] '>
            <div className="navbar bg-transparent w-[90%] mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-52 p-2 shadow">
                            {links}

                        </ul>
                    </div>
                    <a className="text-xl text-slate-200 italic">Durjoy<span className='text-cyan-500 italic'>Chando</span></a>
                </div>
                <div className="navbar-center rounded-md shadow-md shadow-slate-500 bg-gradient-to-r from-[rgba(24,23,23,0.47)] via-gray-900 to-[rgba(24,23,23,0.47)]  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='/DurjoyChando_Resume.pdf' download='/DurjoyChando_Resume.pdf' rel='resume'  className="btn bg-cyan-600 text-black hover:text-white hover:border-sky-300 ">Resume <MdOutlineFileDownload className='text-xl' /></a>
                </div>
                
            </div>
        </div>

    );
};

export default Navbar;