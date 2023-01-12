import { motion } from 'framer-motion';
import React from 'react';

const Getintouch = () => {
  return (
    <div className='relative flex overflow-hidden flex-col items-stretch padding-4'>
      <div className="main-container small-container">
        <div className='w-full pb-[40px]'>
          <div className='inline-block'>
            <motion.h2
              initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.4, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
            >Get in touch<span className='text-[#cf0101]'>.</span></motion.h2>
          </div>
          <motion.div 
            initial={{ y: '50px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            transition={{ delay: 0.5, staggerChildren: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
            className='max-w-[500px] text-[18px] font-[300]'>We care the solution and service more than awards, meanwhile awards are the reputation about our works</motion.div>
        </div>
        <div className='grid grid-rows-[auto] grid-cols-[0.75fr_1fr] auto-cols-[1fr] gap-y-[16px] gap-x-[33px] w-full sm:grid-cols-[1fr]'>
          <div className='global-start'>
            <motion.div 
              initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.6, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
              className='inline-block mr-[20px] text-[#12182f] text-[16px] font-[600]'>
              4140 Parker Rd.
              <br />
              Allentown, New Mexico 31134
            </motion.div>
          </div>
          <motion.div 
            initial={{ y: '50px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            transition={{ delay: 0.7, staggerChildren: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
            className='mb-[15px]'>
            <form id='email-form' data-name='Email Form' method='get' aria-label='Email Form' className='grid auto-cols-[1fr] gap-x-[16px] gap-y-[16px] grid-cols-[1fr_1fr] grid-rows-[auto_auto]'>
              <input 
                type="text" 
                name="Full-Name" 
                data-name="Full Name" 
                placeholder="Full Name *" 
                id="Full-Name" 
                required 
                className='w-full h-[38px] p-[8px_12px] mb-[10px] text-[#333] block text-[14px] font-[400] bg-transparent outline-none border-b-[1px] border-[#000]'
              />
              <input 
                type="email" 
                name="Email" 
                data-name="Email" 
                placeholder="Email *" 
                id="Email" 
                required 
                className='w-full h-[38px] p-[8px_12px] mb-[10px] text-[#333] block text-[14px] font-[400] bg-transparent outline-none border-b-[1px] border-[#000]'
              />
              <input 
                type="text" 
                name="Company-Name" 
                data-name="Company Name" 
                placeholder="Company Name" 
                id="Company-Name" 
                required 
                className='w-full h-[38px] p-[8px_12px] mb-[10px] text-[#333] block text-[14px] font-[400] bg-transparent outline-none border-b-[1px] border-[#000]'
              />
              <input 
                type="text" 
                name="Your-Title" 
                data-name="Your Title" 
                placeholder="Your Title" 
                id="Full-Name" 
                required 
                className='w-full h-[38px] p-[8px_12px] mb-[10px] text-[#333] block text-[14px] font-[400] bg-transparent outline-none border-b-[1px] border-[#000]'
              />
              <textarea placeholder="More Message you want to share" maxlength="5000" id="Message" name="Message" data-name="Message" class="w-full h-[38px] p-[8px_12px] mb-[10px] text-[#333] block text-[14px] font-[400] bg-transparent outline-none border-b-[1px] border-[#000] textarea min-h-[120px]"></textarea>
              <input type="submit" value="Submit" data-wait="Please wait..." id="w-node-_9a9110d0-4f53-402e-f6a5-db231b695ae2-b311717a" class="global-cta"></input>
            </form>
          </motion.div>
        </div>
      </div>
      <div className='absolute left-auto top-0 right-0 bottom-0 z-auto w-[60%] bg-[#f5fcff]'></div>
    </div>
  );
};

export default Getintouch;