import { motion } from 'framer-motion';
import React from 'react';

const Succes = () => {
  return (
    <div className='relative flex overflow-hidden flex-col items-stretch padding-4 bg-[#12182f]'>
      <div className='absolute left-0 top-0 right-0 bottom-0 z-0 flex mb-[60px] flex-col justify-end items-center'>
        <div className='static top-0 left-0 right-0 bottom-0 z-[-2] text-[#0d1224] text-[240px] leading-[200px] font-[700]'>TOP.</div>
      </div>
      <div className="main-container small-container">
          <div className="global-intro">
            <motion.div 
              initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.4, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              className="global-labelling light">Successful Data</motion.div>
            <motion.p 
              initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              className="text-large white">In the past years we are working on high-end design experience. What we do every day is creating innovation.</motion.p>
            <motion.div 
              initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.6, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              className="vline light"></motion.div>
          </div>
          <div className='grid w-full grid-rows-[auto] auto-cols-[1fr] grid-cols-[1fr_1fr_1fr] gap-[16px] sm:grid-cols-[1fr] sm:gap-[32px]'>
            <motion.div 
              initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.7, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              className='flex flex-col justify-start items-center'>
              <div className='relative inline-block mb-[40px]'>
                <div className='dark-circle'></div>
                <div className='inline-block text-[#fff] text-[60px] leading-[120px] font-[700]'>30+</div>
              </div>
              <div className='text-large white'>Suticified Clients</div>
            </motion.div>
            <motion.div 
              initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.8, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              className='flex flex-col justify-start items-center'>
              <div className='relative inline-block mb-[40px]'>
                <div className='dark-circle'></div>
                <div className='inline-block text-[#fff] text-[60px] leading-[120px] font-[700]'>100+</div>
              </div>
              <div className='text-large white'>Successful Projects</div>
            </motion.div>
            <motion.div 
              initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.9, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              className='flex flex-col justify-start items-center'>
              <div className='relative inline-block mb-[40px]'>
                <div className='dark-circle'></div>
                <div className='inline-block text-[#fff] text-[60px] leading-[120px] font-[700]'>10+</div>
              </div>
              <div className='text-large white'>Famous Awards</div>
            </motion.div>
          </div>
        </div>
    </div>
  );
};

export default Succes;