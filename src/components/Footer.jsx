import React from 'react';

const Footer = () => {
  return (
    <div className='relative left-0 top-auto right-0 bottom-0 z-[1] flex p-[30px_4%] flex-col justify-start items-center border-t-[1px] border-[#d8e2e8] bg-white'>
      <div className="main-container">
        <div className='flex justify-between items-center md:flex-col md:gap-y-[10px]'>
          <div className='flex items-center gap-y-[10px]'>
            <div className='text-[14px] text-[#6a6f83] leading-[1.5] font-[300]'>
              Made by <a href="https://www.instagram.com/iambeckdeveloper/" target="_blank" className='text-[#cf0101] hover:underline'>Beck Sattorov</a>
            </div>
          </div>
          <div className='flex items-center gap-x-[10px]'>
            <a href="#" className='text-[14px] text-[#6a6f83] leading-[1.5] font-[300] hover:underline'>Style Guide</a>
            <a href="#" className='text-[14px] text-[#6a6f83] leading-[1.5] font-[300] hover:underline'>Licenses</a>
            <a href="#" className='text-[14px] text-[#6a6f83] leading-[1.5] font-[300] hover:underline'>Changelog</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;