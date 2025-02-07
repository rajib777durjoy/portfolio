import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Project from '../Project/Project';
import Footer from '../../Footer/Footer';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='w-[100%]'>
           <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;