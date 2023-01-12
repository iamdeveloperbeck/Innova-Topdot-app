import { motion } from 'framer-motion';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import image from '../constants/image';
import Getintouch from '../container/Getintouch';

const About2 = () => {
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
            className='mt-0 mb-0 text-[140px] leading-[0.7] uppercase lg:text-[120px] sm:text-[60px]'>About<span className='text-[#cf0101]'>.</span></motion.h1>
          <motion.h1 
            initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
            className='outline-text uppercase'>Us</motion.h1>
          <div className='flex mb-0 justify-end'>
            <motion.p 
              initial={{ x: '50px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              transition={{ delay: 0.6, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
            className='w-[450px] font-[400]'>We are professional angency with 15 years experience in architecture industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</motion.p>
          </div>
        </div>
      </div>
      <div className='relative flex overflow-hidden ml-0 p-[120px_4%] pt-0 flex-col items-stretch bg-white'>
        <div className="main-container">
          <div className='grid gap-x-[30px] gap-y-[30px] auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] sm:grid-cols-[1fr]'>
            <motion.img 
              initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.7, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              src={image.about1} alt="about" className='about-img w-full h-full object-cover' />
            <motion.img 
              initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.8, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              src={image.about3} alt="about" className='justify-self-stretch w-full h-full object-cover'/>
            <motion.img 
              initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.9, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              src={image.about2} alt="about" className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
      <div className='relative flex overflow-hidden ml-0 p-[120px_4%] flex-col items-stretch bg-[#12182f] sm:p-[80px_4%]'>
        <div className="main-container centered">
          <motion.p 
            initial={{ y: '50px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            transition={{ delay: 0.6, staggerChildren: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
            className='text-[#fff] text-[28px] font-[500] text-left indent-[50px] uppercase sm:text-[18px]'>
          WE ALWAYS FOCUS ON CREATIVE SOLUTIONS, CONSECTETUR ADIPISCING ELIT. SUSPENDISSE VARIUS ENIM IN EROS ELEMENTUM TRISTIQUE. DUIS CURSUS, MI QUIS VIVERRA ORNARE, EROS DOLOR INTERDUM NULLA, UT COMMODO DIAM LIBERO VITAE ERAT. AENEAN FAUCIBUS NIBH ET JUSTO CURSUS ID RUTRUM LOREM IMPERDIET. NUNC UT SEM VITAE RISUS TRISTIQUE POSUERE.
          </motion.p>
        </div>
      </div>
      <div className='relative flex overflow-hidden ml-0 p-[120px_4%] flex-col items-stretch bg-white sm:p-[80px_4%]'>
        <div className="main-container">
          <motion.h2
            initial={{ y: '50px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            transition={{ delay: 0.5, staggerChildren: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
          >Our Team</motion.h2>
          <div className='grid grid-cols-[1fr_1fr_1fr] grid-rows-[auto] auto-cols-[1fr] gap-x-[16px] gap-y-[16px] sm:grid-cols-[1fr]'>
            <motion.div 
              initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.6, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              className='grid w-full pr-0 pl-0 items-start flex-nowrap content-center auto-cols-[1fr] gap-x-[16px] gap-y-[0] grid-cols-[1fr] grid-rows-[auto_auto]'>
              <div className='flex w-auto items-start flex-[0_0_auto]'>
                <img src={image.team1} alt="team" className='w-full h-[60vh] object-cover' />
              </div>
              <div className='w-auto h-full p-[20px] bg-[#f5fcff]'>
                <h3 className='mb-[15px] text-[22px] leading-[1.3] font-[700]'>Stella Miles</h3>
                <div className='mb-[20px] text-[16px] text-[#12182f]'>Designer</div>
                <div>
                  <a href="#" className='bg-[#fff] mr-[15px] inline-block p-[10px] text-[#12182f] uppercase font-[300] hover:underline hover:text-[#cf0101]'>IG</a>
                  <a href="#" className='bg-[#fff] mr-[15px] inline-block p-[10px] text-[#12182f] uppercase font-[300] hover:underline hover:text-[#cf0101]'>IN</a>
                  <a href="#" className='bg-[#fff] mr-[15px] inline-block p-[10px] text-[#12182f] uppercase font-[300] hover:underline hover:text-[#cf0101]'>YT</a>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.7, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              className='grid w-full pr-0 pl-0 items-start flex-nowrap content-center auto-cols-[1fr] gap-x-[16px] gap-y-[0] grid-cols-[1fr] grid-rows-[auto_auto]'>
              <div className='flex w-auto items-start flex-[0_0_auto]'>
                <img src={image.team2} alt="team" className='w-full h-[60vh] object-cover' />
              </div>
              <div className='w-auto h-full p-[20px] bg-[#f5fcff]'>
                <h3 className='mb-[15px] text-[22px] leading-[1.3] font-[700]'>Ethan Garrett</h3>
                <div className='mb-[20px] text-[16px] text-[#12182f]'>Designer</div>
                <div>
                  <a href="#" className='bg-[#fff] mr-[15px] inline-block p-[10px] text-[#12182f] uppercase font-[300] hover:underline hover:text-[#cf0101]'>IG</a>
                  <a href="#" className='bg-[#fff] mr-[15px] inline-block p-[10px] text-[#12182f] uppercase font-[300] hover:underline hover:text-[#cf0101]'>IN</a>
                  <a href="#" className='bg-[#fff] mr-[15px] inline-block p-[10px] text-[#12182f] uppercase font-[300] hover:underline hover:text-[#cf0101]'>YT</a>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.8, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              className='grid w-full pr-0 pl-0 items-start flex-nowrap content-center auto-cols-[1fr] gap-x-[16px] gap-y-[0] grid-cols-[1fr] grid-rows-[auto_auto]'>
              <div className='flex w-auto items-start flex-[0_0_auto]'>
                <img src={image.team3} alt="team" className='w-full h-[60vh] object-cover' />
              </div>
              <div className='w-auto h-full p-[20px] bg-[#f5fcff]'>
                <h3 className='mb-[15px] text-[22px] leading-[1.3] font-[700]'>Patrick Hanson</h3>
                <div className='mb-[20px] text-[16px] text-[#12182f]'>Designer</div>
                <div>
                  <a href="#" className='bg-[#fff] mr-[15px] inline-block p-[10px] text-[#12182f] uppercase font-[300] hover:underline hover:text-[#cf0101]'>IG</a>
                  <a href="#" className='bg-[#fff] mr-[15px] inline-block p-[10px] text-[#12182f] uppercase font-[300] hover:underline hover:text-[#cf0101]'>IN</a>
                  <a href="#" className='bg-[#fff] mr-[15px] inline-block p-[10px] text-[#12182f] uppercase font-[300] hover:underline hover:text-[#cf0101]'>YT</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Getintouch />
      <Footer />
    </>
  );
};

export default About2;