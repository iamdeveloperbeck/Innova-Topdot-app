import React from 'react';

import { Swiper, SwiperSlide} from 'swiper/react';
import { EffectFade, Navigation, Autoplay, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import image from '../constants/image';
import { Link } from 'react-router-dom';
import './global.css';

const Features = () => {
  return (
    <div className='flex w-full h-auto pr-[4%] pl-[4%] pb-[120px] sm:pb-[80px] flex-col justify-center items-center'>
      <div className="main-container full-width">
        <h2 className='w-full mb-[10px] text-[16px] leading-[1.2] font-[400] text-right tracking-[15px] uppercase'>Selected Works</h2>
        <div className='w-full h-[85vh] md:h-[60vh] sm:h-[50vh] overflow-hidden'>
          <Swiper 
            modules={[EffectFade, Autoplay, Pagination]}
            slidesPerView={1}
            effect="fade"
            speed={800}
            pagination={{ clickable: true }}
            loop
            autoplay={{ delay: 5000 }}
          >
            <SwiperSlide className='relative slide-swiper'>
                <img src={image.feature1} alt="" className='feature-img first-child' />
                <div className='absolute left-[30px] sm:left-[20px] top-[30px] right-auto bottom-auto z-10 flex w-auto flex-col items-start'>
                  <div className='overflow-hidden'>
                    <h2 className='mt-0 mb-0 leading-[1] font-[600] uppercase' data-animation='bottom'>Act Office</h2>
                  </div>
                  <div className='overflow-hidden'>
                    <div className='outline-text text-[50px] leading-[1.2] font-[600]' data-animation='bottom'>2021</div>
                  </div>
                </div>
                <div className='absolute left-auto top-[30px] right-[30px] bottom-auto z-10 overflow-hidden pt-[10px]'>
                  <div className='text-[70px] font-[600] leading-[1] text-[#12182f] sm:text-[36px]' data-animation='bottom'>1</div>
                </div>
                <div className="slide-arrow">
                  <img src={image.arrow} alt="arrow" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative slide-swiper'>
                <img src={image.feature2} alt="" className='feature-img' />
                <div className='absolute left-[30px] sm:left-[20px] top-[30px] right-auto bottom-auto z-10 flex w-auto flex-col items-start'>
                  <div className='overflow-hidden'>
                    <h2 className='mt-0 mb-0 leading-[1] font-[600] uppercase' data-animation='bottom'>Advance <br className='hidden sm:block' /> Building</h2>
                  </div>
                  <div className='overflow-hidden'>
                    <div className='outline-text text-[50px] leading-[1.2] font-[600]' data-animation='bottom'>2021</div>
                  </div>
                </div>
                <div className='absolute left-auto top-[30px] right-[30px] bottom-auto z-10 overflow-hidden pt-[10px]'>
                  <div className='text-[70px] font-[600] leading-[1] text-[#12182f] sm:text-[36px]' data-animation='bottom'>2</div>
                </div>
                <div className="slide-arrow">
                  <img src={image.arrow} alt="arrow" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative slide-swiper'>
                <img src={image.feature3} alt="" className='feature-img' />
                <div className='absolute left-[30px] sm:left-[20px] top-[30px] right-auto bottom-auto z-10 flex w-auto flex-col items-start'>
                  <div className='overflow-hidden'>
                    <h2 className='mt-0 mb-0 leading-[1] font-[600] uppercase' data-animation='bottom'>Bot Loft</h2>
                  </div>
                  <div className='overflow-hidden'>
                    <div className='outline-text text-[50px] leading-[1.2] font-[600]' data-animation='bottom'>2022</div>
                  </div>
                </div>
                <div className='absolute left-auto top-[30px] right-[30px] bottom-auto z-10 overflow-hidden pt-[10px]'>
                  <div className='text-[70px] font-[600] leading-[1] text-[#12182f] sm:text-[36px]' data-animation='bottom'>3</div>
                </div>
                <div className="slide-arrow">
                  <img src={image.arrow} alt="arrow" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative slide-swiper'>
                <img src={image.feature4} alt="" className='feature-img' />
                <div className='absolute left-[30px] sm:left-[20px] top-[30px] right-auto bottom-auto z-10 flex w-auto flex-col items-start'>
                  <div className='overflow-hidden'>
                    <h2 className='mt-0 mb-0 leading-[1] font-[600] uppercase' data-animation='bottom'>Tooc Resort</h2>
                  </div>
                  <div className='overflow-hidden'>
                    <div className='outline-text text-[50px] leading-[1.2] font-[600]' data-animation='bottom'>2022</div>
                  </div>
                </div>
                <div className='absolute left-auto top-[30px] right-[30px] bottom-auto z-10 overflow-hidden pt-[10px]'>
                  <div className='text-[70px] font-[600] leading-[1] text-[#12182f] sm:text-[36px]' data-animation='bottom'>4</div>
                </div>
                <div className="slide-arrow">
                  <img src={image.arrow} alt="arrow" />
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Features;