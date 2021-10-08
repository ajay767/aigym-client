import React, { useState } from 'react';
import Section from '../layout/Section';
import { useHistory } from 'react-router';
import { CgMenuLeft } from 'react-icons/cg';
import { BiScan } from 'react-icons/bi';
import Navbar from './Sidebar';
import { AnimatePresence } from 'framer-motion';
function Header() {
  const history = useHistory();
  const [sidebar, setSidebar] = useState(false);
  return (
    <Section className="py-4">
      <AnimatePresence>
        {sidebar && <Navbar onClose={setSidebar} />}
      </AnimatePresence>
      <div className="flex justify-between items-center">
        <CgMenuLeft
          onClick={(prev) => setSidebar(true)}
          size={34}
          className="text-gray-700"
        />

        <div className="flex items-center justify-center">
          <BiScan
            size={30}
            className="mr-5"
            onClick={() => {
              history.push('/scan');
            }}
          />

          <img
            className="w-10 h-10 border-2 border-white shadow-md rounded-full "
            src="/assets/icons/user.png"
            alt="user"
          />
        </div>
      </div>
    </Section>
  );
}

export default Header;
