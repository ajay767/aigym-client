import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { sidebarVariant, pathVariants } from './Variants';
import { CgFileDocument, CgProfile } from 'react-icons/cg';
import { AiOutlineContacts, AiOutlineDashboard } from 'react-icons/ai';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Menu = [
  {
    name: 'Dashboard',
    icon: <AiOutlineDashboard className='text-3xl' />,
    path: '/',
  },
  {
    name: 'About Us',
    icon: <CgFileDocument className='text-3xl' />,
    path: '/aboutus',
  },
  {
    name: 'Contact Us',
    icon: <AiOutlineContacts className='text-3xl' />,
    path: '/contactus',
  },
  {
    name: 'My Profile',
    icon: <CgProfile className='text-3xl' />,
    path: '/profile',
  },
  {
    name: 'Notification',
    icon: <IoIosNotificationsOutline className='text-3xl' />,
    path: '/notification',
  },
];
const renderMenu = () => {
  return Menu.map((option) => {
    return (
      <NavLink
        exact
        to={option.path}
        activeClassName='active'
        className='flex space-x-8 items-center cursor-pointer px-2 py-4 text-gray-400 hover:text-gray-800 hover:bg-gray-200'
      >
        {option.icon}
        <h4 className='font-medium text-lg'>{option.name}</h4>
      </NavLink>
    );
  });
};

export default function Sidebar({ setSidebar }) {
  return (
    <>
      <motion.div
        variants={sidebarVariant}
        initial='backgroundInitial'
        animate='backgroundFinal'
        exit='backgroundExit'
        onClick={() => setSidebar(false)}
        className='fixed top-0 left-0 bottom-0 right-0 bg-gray-500 bg-opacity-40 backdrop-filter backdrop-blur-sm z-10'
      ></motion.div>
      <motion.div
        variants={sidebarVariant}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='z-20 fixed top-0 bottom-0 left-0 z-20 w-2/3 overflow-y-auto scrollbar-hide bg-gray-100'
      >
        <div className='sidebar-header px-5 py-2 flex justify-between items-center'>
          <img
            className='w-24 transform translate-y-1'
            src='/assets/images/logo.svg'
          ></img>
          <BsBoxArrowLeft
            onClick={() => setSidebar(false)}
            className='text-4xl text-gray-400'
          />
        </div>
        <div className='py-4 space-y-1'>{renderMenu()}</div>
      </motion.div>
    </>
  );
}
