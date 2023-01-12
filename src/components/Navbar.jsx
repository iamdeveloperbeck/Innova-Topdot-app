import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import image from '../constants/image';
import { CgMenuRight } from 'react-icons/cg';
import { TfiClose } from 'react-icons/tfi';
import { MenuItems } from './MenuItems';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='relative flex w-full padding-1 justify-between items-center bg-transparent'>
      <div className="nav-container">
        <div className='relative z-40'>
          <a href="#" className='inline-block p-[10px] text-[#12182f] uppercase font-[300] hover:underline hover:text-[#cf0101]'>ig</a>
          <a href="#" className='inline-block p-[10px] text-[#12182f] uppercase font-[300] hover:underline hover:text-[#cf0101]'>fb</a>
        </div>
        <Link to={'/'} className="flex items-center justify-center z-40"> <img src={image.logo} alt="" /> </Link>
        <div className='flex justify-end'>
          {toggle ? <TfiClose fontSize={28} color="#cf0101" className='cursor-pointer z-40' onClick={() => setToggle(false)} />
                  : <CgMenuRight fontSize={28} color="#cf0101" className='cursor-pointer z-40' onClick={() => setToggle(true)}  />}
        </div>
      </div>
      <div className='w-full absolute top-0 left-0 z-30'>
        {toggle && (
          <ul className='w-full h-[100vh] bg-white z-30 flex flex-col items-center justify-center self-start'>
            {MenuItems.map((items, index) => {
              return (
                <li key={index} className="list-none">
                  <Link to={items.url} className={items.cName}>{items.title}</Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;