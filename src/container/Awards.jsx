import React, { useState, useEffect, useRef } from 'react';
import image from '../constants/image';
import { Data } from '../constants/accordionData';
import { motion } from 'framer-motion'; 

const Awards = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className='relative flex overflow-hidden flex-col items-stretch padding-4'>
      <div className="main-container small-container">
        <div className='w-full pb-[40px]'>
          <motion.div 
            initial={{ y: '50px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            transition={{ delay: 0.4, staggerChildren: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
            className='flex items-stretch'>
            <h2 className='mt-0 mb-[15px] text-[#12182f] text-[48px] leading-[1.2] font-[700] lg:text-[32px]'>Awards<span className='text-[#cf0101]'>.</span></h2>
            <div>(5 selected)</div>
          </motion.div>
          <motion.div 
            initial={{ y: '50px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            transition={{ delay: 0.5, staggerChildren: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
            className='max-w-[500px] text-[18px] sm:text-[17px]'>We care the solution and service more than awards, meanwhile awards are the reputation about our works</motion.div>
        </div>
        <div className='w-full h-[1px] mt-0 bg-[#12182f]'></div>
            {Data.map((item, index) => {
              return (
                <>
                  <motion.div 
                    initial={{ y: '50px', opacity: 0 }}
                    whileInView={{ y: '0', opacity: 1 }}
                    transition={{ delay: 0.6, staggerChildren: 0.5 }}
                    viewport={{ once: true, amount: 0.25 }}
                    className='w-full mt-0 pt-0 pb-0 border-b-[1px] border-[#12182f]'>
                    <motion.div 
                      initial={{ y: '50px', opacity: 0 }}
                      whileInView={{ y: '0', opacity: 1 }}
                      transition={{ delay: 0.8, staggerChildren: 0.5 }}
                      viewport={{ once: true, amount: 0.25 }}
                      onClick={() => toggle(index)} key={index} className='grid mb-0 pt-[25px] pb-[25px] auto-cols-[1fr] grid-cols-[1fr_1fr] gap-[5px] grid-rows-[auto_auto] cursor-pointer'>
                      <div className='flex flex-col'>
                        <h3 className='mb-0 mt-0 text-[#12182f] text-[30px] leading-[1.2] font-[700] md:text-[22px]'>{item.question}</h3>
                        <div>{item.subtitle}</div>
                      </div>
                      <div className='flex flex-col items-end'>
                          <h4 className='outline-text mt-0 mb-0 text-[#f5fcff] justify-self-end'>{item.numbers}</h4>
                      </div>
                    </motion.div>
                    {clicked === index ? (
                      <div className="accordion-content">
                        <div className='w-[500px]'>
                          <p>{item.title}</p>
                          <a href="#" className='text-[#cf0101] hover:underline'>Read More</a>
                        </div>
                        <img src={item.imgUrl} alt="accodion img" />
                      </div>
                    ) : null}
                  </motion.div>
                </>
              )
            })}
      </div>
    </div>
  );
};

export default Awards;