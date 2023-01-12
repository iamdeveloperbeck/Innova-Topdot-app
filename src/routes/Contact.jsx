import { motion } from 'framer-motion';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Getintouch from '../container/Getintouch';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='relative flex overflow-hidden min-h-[auto] p-[120px_4%_40px] flex-col justify-between items-center md:p-[40px_20px] sm:p-[60px_5%_0]'>
        <div className="main-container">
          <motion.h1 
            initial={{ y: '50px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            transition={{ delay: 0.3, staggerChildren: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
          className='mt-0 mb-0 text-[140px] leading-[0.7] sm:text-[60px] lg:text-[120px]'>Contact<span className='text-[#cf0101]'>.</span></motion.h1>
        </div>
      </div>
      <Getintouch />
      <Footer />
    </>
  );
};

export default Contact;