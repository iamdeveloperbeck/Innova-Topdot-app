import { motion } from 'framer-motion';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Getintouch from '../container/Getintouch';
import { Resorts } from '../pages/Resorts';

const Works = () => {
  return (
    <>
      <Navbar />
      <div className='relative flex min-h-[auto] p-[120px_4%_40px] flex-col justify-between items-center lg:p-[40px_20px] sm:p-[60px_5%_0]'>
        <div className="main-container">
          <motion.h1 
            initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.4, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
            className='mt-0 mb-0 text-[140px] leading-[0.7] uppercase lg:text-[120px] sm:text-[60px]'>Top<span className='text-[#cf0101]'>.</span></motion.h1>
          <motion.h1 
            initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
            className='outline-text uppercase'>Works</motion.h1>
          <div className='flex mb-0 justify-end'>
            <motion.p 
              initial={{ x: '50px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              transition={{ delay: 0.6, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              className='w-[450px] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</motion.p>
          </div>
        </div>
      </div>
      <Resorts />
      <Getintouch />
      <Footer />
    </>
  );
};

export default Works;