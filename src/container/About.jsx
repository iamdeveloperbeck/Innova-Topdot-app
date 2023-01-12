import { motion } from 'framer-motion';
import React from 'react';

import image from '../constants/image';

const About = () => {
  return (
    <div className='relative flex overflow-hidden flex-col items-stretch bg-[#f5fcff] padding-4'>
      <div className="main-container">
        <div className="global-intro">
          <motion.div 
            initial={{ y: '50px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            transition={{ delay: 0.6, staggerChildren: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
            className="global-labelling">About Us</motion.div>
          <motion.p 
            initial={{ y: '50px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            transition={{ delay: 0.7, staggerChildren: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
            className="text-large">In the past years, we are trying best to help the business to solve their problem on architecture with <strong>Innovative</strong> ways.</motion.p>
          <motion.div 
            initial={{ y: '50px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            transition={{ delay: 0.8, staggerChildren: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
            className="vline"></motion.div>
        </div>
        <div className="global-grid about-grid">
          <div className='w-full h-[500px] md:h-[400px]' id='grid-item'>
            <motion.img 
              initial={{ x: '50px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              src={image.about1} alt="about" className='w-full h-full object-cover' />
          </div>
          <div className='relative z-10 flex w-auto md:w-full h-full p-[30px] justify-center items-center'>
            <motion.p 
              initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.3, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</motion.p>
          </div>
          <div className='w-full h-[400px]'>
            <motion.img 
              initial={{ x: '50px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              transition={{ delay: 0.6, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              src={image.about2} alt="about" className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;