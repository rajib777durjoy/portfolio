import React from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
       <footer className="bg-gradient-to-r from-black via-[#001630] to-[#000814] text-blue-300 py-6 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left section: Logo & copyright */}
        <aside className="flex items-center space-x-3">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-blue-400"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
          </svg>
          <p className="text-sm sm:text-base select-none">
            &copy; {new Date().getFullYear()} Durjoy Chando. All rights reserved.
          </p>
        </aside>

        {/* Right section: Social icons */}
        <nav className="flex space-x-6">
          <a
            href="https://github.com/rajib777durjoy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-blue-300 hover:text-blue-500 transition-colors duration-300"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/durjoy-chando-4a9878317"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-300 hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://x.com/DurjoyChando"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-blue-300 hover:text-blue-500 transition-colors duration-300"
          >
            <FaTwitter className="text-3xl" />
          </a>
          <a
            href="https://www.facebook.com/durjoy.chando.2024"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-blue-300 hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebookSquare className="text-3xl" />
          </a>
        </nav>
      </div>
    </footer>
    );
};

export default Footer;