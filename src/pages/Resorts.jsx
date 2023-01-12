import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

import image from '../constants/image';

export const Resorts = () => {
  return (
    <div className='relative flex overflow-hidden ml-0 pt-0 p-[120px_4%] flex-col items-start bg-[#fff] sm:pb-[60px]'>
        <div className='w-full grid auto-cols-[1fr] gap-y-[200px] gap-x-[16px] grid-rows-[auto_auto] lg:gap-y-[100px] sm:gap-y-[40px]'>
            <motion.div 
                initial={{ y: '50px', opacity: 0 }}
                whileInView={{ y: '0', opacity: 1 }}
                transition={{ delay: 0.4, staggerChildren: 0.5 }}
                viewport={{ once: true, amount: 0.25 }}
                className='flex justify-start items-start'>
                <div className='w-[60%] sm:w-[100%]'>
                    <div className='relative overflow-hidden w-full max-w-[100%]'>
                        <Link to="/">
                            <div className='absolute top-0 left-0 right-auto bottom-0 z-10 w-full bg-[#f5fcff] hidden'></div>
                            <img src={image.work1} alt="feature" className='w-full h-full object-cover object-[50%_50%] transition-all ease-in-out hover:scale-125' />
                        </Link>
                    </div>
                    <div className='mt-[30px]'>
                        <div className='overflow-hidden'>
                            <h2 className='mt-0 mb-0 leading-[1] font-[600] uppercase'>Tooc Resort</h2>
                        </div>
                        <div className='overflow-hidden'>
                            <h3 className='outline-text mt-0 mb-0 ml-0 font-[600] leading-[1.2]'>2018</h3>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                initial={{ y: '50px', opacity: 0 }}
                whileInView={{ y: '0', opacity: 1 }}
                transition={{ delay: 0.5, staggerChildren: 0.5 }}
                viewport={{ once: true, amount: 0.25 }}
                className='flex justify-end flex-row justify-self-end'>
                <div className='w-[100%]'>
                    <div className='relative overflow-hidden w-full max-w-[100%]'>
                        <Link to="/">
                            <div className='absolute top-0 left-0 right-auto bottom-0 z-10 w-full bg-[#f5fcff] hidden'></div>
                            <img src={image.work2} alt="feature" className='w-full h-full object-cover object-[50%_50%] transition-all ease-in-out hover:scale-125' />
                        </Link>
                    </div>
                    <div className='mt-[30px]'>
                        <div className='overflow-hidden'>
                            <h2 className='mt-0 mb-0 leading-[1] font-[600] uppercase'>Act Office</h2>
                        </div>
                        <div className='overflow-hidden'>
                            <h3 className='outline-text mt-0 mb-0 ml-0 font-[600] leading-[1.2]'>2020</h3>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                initial={{ y: '50px', opacity: 0 }}
                whileInView={{ y: '0', opacity: 1 }}
                transition={{ delay: 0.6, staggerChildren: 0.5 }}
                viewport={{ once: true, amount: 0.25 }}
                className='flex justify-start items-start'>
                <div className='w-[60%] sm:w-[100%]'>
                    <div className='relative overflow-hidden w-full max-w-[100%]'>
                        <Link to="/">
                            <div className='absolute top-0 left-0 right-auto bottom-0 z-10 w-full bg-[#f5fcff] hidden'></div>
                            <img src={image.work3} alt="feature" className='w-full h-full object-cover object-[50%_50%] transition-all ease-in-out hover:scale-125' />
                        </Link>
                    </div>
                    <div className='mt-[30px]'>
                        <div className='overflow-hidden'>
                            <h2 className='mt-0 mb-0 leading-[1] font-[600] uppercase'>Bot Loft</h2>
                        </div>
                        <div className='overflow-hidden'>
                            <h3 className='outline-text mt-0 mb-0 ml-0 font-[600] leading-[1.2]'>2019</h3>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                initial={{ y: '50px', opacity: 0 }}
                whileInView={{ y: '0', opacity: 1 }}
                transition={{ delay: 0.7, staggerChildren: 0.5 }}
                viewport={{ once: true, amount: 0.25 }}
                className='flex justify-end flex-row justify-self-end'>
                <div className='w-[100%]'>
                    <div className='relative overflow-hidden w-full max-w-[100%]'>
                        <Link to="/">
                            <div className='absolute top-0 left-0 right-auto bottom-0 z-10 w-full bg-[#f5fcff] hidden'></div>
                            <img src={image.work4} alt="feature" className='w-full h-full object-cover object-[50%_50%] transition-all ease-in-out hover:scale-125' />
                        </Link>
                    </div>
                    <div className='mt-[30px]'>
                        <div className='overflow-hidden'>
                            <h2 className='mt-0 mb-0 leading-[1] font-[600] uppercase'>Advance Building</h2>
                        </div>
                        <div className='overflow-hidden'>
                            <h3 className='outline-text mt-0 mb-0 ml-0 font-[600] leading-[1.2]'>2019</h3>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.8, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
                className='flex justify-start items-start'>
                <div className='w-[60%] sm:w-[100%]'>
                    <div className='relative overflow-hidden w-full max-w-[100%]'>
                        <Link to="/">
                            <div className='absolute top-0 left-0 right-auto bottom-0 z-10 w-full bg-[#f5fcff] hidden'></div>
                            <img src={image.work5} alt="feature" className='w-full h-full object-cover object-[50%_50%] transition-all ease-in-out hover:scale-125' />
                        </Link>
                    </div>
                    <div className='mt-[30px]'>
                        <div className='overflow-hidden'>
                            <h2 className='mt-0 mb-0 leading-[1] font-[600] uppercase'>Luc Hotel</h2>
                        </div>
                        <div className='overflow-hidden'>
                            <h3 className='outline-text mt-0 mb-0 ml-0 font-[600] leading-[1.2]'>2018</h3>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  );
};
