import { motion } from 'framer-motion';
import React, { useState } from 'react';
import image from '../constants/image';

const Services = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className='relative flex overflow-hidden flex-col items-stretch padding-4'>
      <div className="main-container small-container">
        <div className="global-intro">
          <motion.div 
            initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.6, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
            className="global-labelling">Our Services</motion.div>
          <motion.p 
            initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.7, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
            className="text-large">We provide high-class services to help you build high-end projects<span className='text-[#cf0101]'>.</span></motion.p>
          <motion.div 
            initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.8, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
            className="vline"></motion.div>
        </div>
        <div className='flex relative gap-[30px] md:flex-col md:gap-[20px]' data-current="tab">
          <motion.div 
            initial={{ y: '50px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            transition={{ delay: 0.8, staggerChildren: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
            className='relative flex w-[40%] md:w-full flex-col border-t-[1px] border-[#d8e2e8]'>
            <a className={toggleState === 1 ? "tab-link active-tabs" : "tab-link"} onClick={() => toggleTab(1)}>
              <div>Interior Design</div>
              <img src={image.arrow2} alt="arrow" />
            </a>
            <a className={toggleState === 2 ? "tab-link active-tabs" : "tab-link"}  onClick={() => toggleTab(2)}>
              <div>Architectural Design</div>
              <img src={image.arrow2} alt="arrow" />
            </a>
            <a className={toggleState === 3 ? "tab-link active-tabs" : "tab-link"}  onClick={() => toggleTab(3)}>
              <div>Spacing Plan</div>
              <img src={image.arrow2} alt="arrow" />
            </a>
          </motion.div>
          <motion.div
            initial={{ y: '50px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            transition={{ delay: 0.9, staggerChildren: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
            className='w-[60%] md:w-full p-[40px] border border-[#d8e2e8] bg-[#f5fcff]'>
            <div className={toggleState === 1 ? "content  active-content" : "content"}>
              <h3 className='mt-0 mb-[15px] text-[30px] lg:text-[28px] md:text-[22px]'>Interior Design Service</h3>
              <div data-text="paragraph">
                <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
              </div>
            </div>
            <div className={toggleState === 2 ? "content  active-content" : "content"}>
              <h3 className='mt-0 mb-[15px] text-[30px] lg:text-[28px] md:text-[22px]'>Architectural Design Service</h3>
              <div data-text="paragraph">
                <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
              </div>
            </div>
            <div className={toggleState === 3 ? "content  active-content" : "content"}>
              <h3 className='mt-0 mb-[15px] text-[30px] lg:text-[28px] md:text-[22px]'>Spacing Plan Service</h3>
              <div data-text="paragraph">
                <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;