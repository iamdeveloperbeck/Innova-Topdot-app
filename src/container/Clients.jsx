import React from 'react';
import image from '../constants/image';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

const Clients = () => {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <div className='relative flex overflow-hidden flex-col items-stretch bg-[#f5fcff] padding-4'>
      <div className="main-container small-container">
        <div className="global-intro">
          <motion.div 
            initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.4, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
            className="global-labelling">Clients' Words</motion.div>
          <motion.p 
            initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
            className="text-large">The reputation is things we care about.It’s not only about providing the best service but also about what clients’ real care.</motion.p>
          <motion.div 
            initial={{ y: '50px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              transition={{ delay: 0.6, staggerChildren: 0.5 }}
              viewport={{ once: true, amount: 0.25 }}
            className="vline"></motion.div>
        </div>
        <Slider {...settings}>
          <div className='relative p-[40px] bg-[#12182f] mr-[30px]'>
            <div className='w-[10px] h-[10px] mb-[30px] rounded-[10px] bg-[#cf0101]'></div>
            <p className='mb-[40px] text-[#fff] text-[18px] italic font-[400]'>“Top agency is the most professional team I have corporated.They really has complished our project perfectly. We’d like to work with them future.”</p>
            <div className='flex mt-[30px] items-start'>
              <div className='w-[80px] h-[80px] overflow-hidden mr-[30px] border-2 border-[#fff] rounded-[100px]'>
                <img src={image.client} alt="client" />
              </div>
              <div>
                <div className='mb-[10px] text-[#fff] text-[18px] leading-[27px] font-[500]'>Jane Cooper</div>
                <div className='mb-[20px] text-[#d8e2e8] text-[16px] leading-[1]'>CEO</div>
                <div className='mb-[20px] text-[#d8e2e8] text-[16px] leading-[1]'>JL technology</div>
              </div>
            </div>
          </div>
          <div className='relative p-[40px] bg-[#12182f] mr-[30px]'>
            <div className='w-[10px] h-[10px] mb-[30px] rounded-[10px] bg-[#cf0101]'></div>
            <p className='mb-[40px] text-[#fff] text-[18px] italic font-[400]'>“Top agency is the most professional team I have corporated.They really has complished our project perfectly. We’d like to work with them future.”</p>
            <div className='flex mt-[30px] items-start'>
              <div className='w-[80px] h-[80px] overflow-hidden mr-[30px] border-2 border-[#fff] rounded-[100px]'>
                <img src={image.client} alt="client" />
              </div>
              <div>
                <div className='mb-[10px] text-[#fff] text-[18px] leading-[27px] font-[500]'>Jane Cooper</div>
                <div className='mb-[20px] text-[#d8e2e8] text-[16px] leading-[1]'>CEO</div>
                <div className='mb-[20px] text-[#d8e2e8] text-[16px] leading-[1]'>JL technology</div>
              </div>
            </div>
          </div>
          <div className='relative p-[40px] bg-[#12182f] mr-[30px]'>
            <div className='w-[10px] h-[10px] mb-[30px] rounded-[10px] bg-[#cf0101]'></div>
            <p className='mb-[40px] text-[#fff] text-[18px] italic font-[400]'>“Top agency is the most professional team I have corporated.They really has complished our project perfectly. We’d like to work with them future.”</p>
            <div className='flex mt-[30px] items-start'>
              <div className='w-[80px] h-[80px] overflow-hidden mr-[30px] border-2 border-[#fff] rounded-[100px]'>
                <img src={image.client} alt="client" />
              </div>
              <div>
                <div className='mb-[10px] text-[#fff] text-[18px] leading-[27px] font-[500]'>Jane Cooper</div>
                <div className='mb-[20px] text-[#d8e2e8] text-[16px] leading-[1]'>CEO</div>
                <div className='mb-[20px] text-[#d8e2e8] text-[16px] leading-[1]'>JL technology</div>
              </div>
            </div>
          </div>
          <div className='relative p-[40px] bg-[#12182f] mr-[30px]'>
            <div className='w-[10px] h-[10px] mb-[30px] rounded-[10px] bg-[#cf0101]'></div>
            <p className='mb-[40px] text-[#fff] text-[18px] italic font-[400]'>“Top agency is the most professional team I have corporated.They really has complished our project perfectly. We’d like to work with them future.”</p>
            <div className='flex mt-[30px] items-start'>
              <div className='w-[80px] h-[80px] overflow-hidden mr-[30px] border-2 border-[#fff] rounded-[100px]'>
                <img src={image.client} alt="client" />
              </div>
              <div>
                <div className='mb-[10px] text-[#fff] text-[18px] leading-[27px] font-[500]'>Jane Cooper</div>
                <div className='mb-[20px] text-[#d8e2e8] text-[16px] leading-[1]'>CEO</div>
                <div className='mb-[20px] text-[#d8e2e8] text-[16px] leading-[1]'>JL technology</div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Clients;