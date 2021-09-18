import React from 'react';
import Section from '../layout/Section';
import { CgMenuLeft } from 'react-icons/cg';
function Header() {
  return (
    <Section className="py-4">
      <div className="flex justify-between items-center">
        <CgMenuLeft size={34} className="text-gray-700" />
        <img
          className="w-12 h-12 border-2 border-white shadow-md rounded-full "
          src="/assets/icons/user.png"
          alt="user"
        />
      </div>
    </Section>
  );
}

export default Header;
