import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Project from '../Project/Project';

import Contact from '../Contact/Contact';

const Home = () => {

   
    return (
        <div className='w-[90%] mx-auto'>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
            
        </div>

    );
};

export default Home;