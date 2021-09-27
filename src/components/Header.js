import React, { useState } from 'react';
import Section from '../layout/Section';
import { CgMenuLeft } from 'react-icons/cg';
import Navbar from './Sidebar';
import { AnimatePresence } from 'framer-motion';
function Header() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <Section className='py-4'>
      <AnimatePresence>
        {sidebar && <Navbar setSidebar={setSidebar} />}
      </AnimatePresence>
      <div className='flex justify-between items-center'>
        <CgMenuLeft
          onClick={(prev) => setSidebar(true)}
          size={34}
          className='text-gray-700'
        />
        <img
          className='w-12 h-12 border-2 border-white shadow-md rounded-full '
          src='/assets/icons/user.png'
          alt='user'
        />
      </div>
    </Section>
  );
}

export default Header;
