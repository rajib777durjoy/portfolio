import React from 'react';

const Navbar = () => {
    const links=<>
    <li><a href='/'>Home</a></li>
    <li><a href='#about'>About</a></li>
    <li><a href='#skills'>Skills</a></li>
    <li><a href='#project'>Project</a></li>
    <li><a href='#contact'>Contact</a></li>
    </>
    return (
        <div className="navbar bg-slate-700 w-[100%] ">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                       
                    </ul>
                </div>
                <a className="text-xl text-slate-200">Durjoy<span className='text-cyan-500 italic'>Chando</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href='http://localhost:5173' download='resume.jpg' className="btn bg-cyan-600 text-black">Resume</a>
            </div>
        </div>
    );
};

export default Navbar;