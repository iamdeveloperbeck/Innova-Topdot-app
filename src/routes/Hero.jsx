import React from 'react';
import Navbar from '../components/Navbar';
import Features from '../container/Features';
import About from '../container/About';
import Services from '../container/Services';
import Clients from '../container/Clients';
import Awards from '../container/Awards';
import Succes from '../container/Succes';
import Getintouch from '../container/Getintouch';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className='relative flex overflow-visible flex-col justify-between items-center padding-2'>
        <div className="main-container full-width">
          <motion.h1
            initial={{ y: '50px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            transition={{ delay: 0.4, staggerChildren: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
            className='mt-0 mb-0 text-[140px] leading-[0.7] lg:text-[120px] sm:text-[60px]'>Innova<span className='text-[#cf0101]'>.</span></motion.h1>
          <div>
            <motion.h1 
              initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              className='outline-text'>Agency</motion.h1>
            <motion.p 
              initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.6, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              className='max-w-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</motion.p>
          </div>
          <motion.div 
            initial={{ y: '60px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            transition={{ delay: 0.7, }}
            viewport={{ once: true, amount: 0.25 }}
            className='absolute left-auto top-auto right-0 bottom-[-60%] z-0 w-[340px] h-[340px] rounded-[300px] bg-[#e8f7fd]'></motion.div>
        </div>
      </div>
      <Features />
      <About />
      <Services />
      <Clients />
      <Awards />
      <Succes />
      <Getintouch />
      <Footer />
    </>
  );
};

export default Hero;