import React from 'react';
import { motion } from 'framer-motion';
import { leftSlideIn } from '@animation/Variants';
import { CgFileDocument, CgProfile } from 'react-icons/cg';
import { AiOutlineContacts, AiOutlineDashboard } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import Typography from '@ui/Typography';

const Menu = [
  {
    name: 'Dashboard',
    icon: <AiOutlineDashboard className="text-3xl" />,
    path: '/',
  },
  {
    name: 'About Us',
    icon: <CgFileDocument className="text-3xl" />,
    path: '/aboutus',
  },
  {
    name: 'Contact Us',
    icon: <AiOutlineContacts className="text-3xl" />,
    path: '/contactus',
  },
  {
    name: 'Profile',
    icon: <CgProfile className="text-3xl" />,
    path: '/profile',
  },
  {
    name: 'Notification',
    icon: <IoIosNotificationsOutline className="text-3xl" />,
    path: '/notification',
  },
];

const renderMenu = () => {
  return Menu.map((option, index) => {
    return (
      <NavLink
        key={index}
        exact
        to={option.path}
        activeClassName="active"
        className="flex space-x-8 items-center cursor-pointer p-2 py-3 text-gray-500 hover:text-gray-800 hover:bg-gray-200"
      >
        <Typography type="content">{option.name}</Typography>
      </NavLink>
    );
  });
};

export default function Sidebar({ onClose }) {
  return (
    <>
      <motion.div
        variants={leftSlideIn}
        initial="backgroundInitial"
        animate="backgroundFinal"
        exit="backgroundExit"
        onClick={() => onClose(false)}
        className="fixed top-0 left-0 bottom-0 right-0 bg-gray-500 bg-opacity-40 backdrop-filter backdrop-blur-sm z-10"
      ></motion.div>
      <motion.div
        variants={leftSlideIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="z-20 fixed top-0 bottom-0 left-0 w-2/3 overflow-y-auto scrollbar-hide bg-white"
      >
        <div className="sidebar-header py-3 px-2 flex justify-between  items-center">
          <div className="w-6/12 ">
            <Typography type="header" className="">
              Fit<span className="font-extrabold ">X</span>
            </Typography>
          </div>
          <div className="w-6/12" onClick={() => onClose(false)}>
            <MdClose size={30} className="ml-auto text-gray-500" />
          </div>
        </div>
        <div className="">{renderMenu()}</div>
      </motion.div>
    </>
  );
}
