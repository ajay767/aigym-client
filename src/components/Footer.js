import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { useLocation } from 'react-router-dom';

const bottomNavigation = [
  { title: 'Home', icon: HiHome, size: 30, path: '/' },
  { title: 'Search', icon: FiSearch, size: 28, path: '/search/hghg' },
  {
    title: 'Notification',
    icon: IoIosNotifications,
    size: 28,
    path: '/notification',
  },
  { title: 'Profile', icon: FaUser, size: 25, path: '/profile' },
];

function Footer() {
  const location = useLocation();

  const renderBottomNav = () => {
    return bottomNavigation.map(({ icon: Icon, size, title, path }, index) => {
      if (location.pathname === path) {  // to understand
        return (
          <Link
            className="self-center justify-self-center"
            to={path}
            key={index}
          >
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              className="flex flex-col items-center justify-center  bg-blue-100 text-blue-500 p-2 px-3  self-center justify-self-center rounded-md"
            >
              <div>
                <Icon className="" size={size} />
              </div>
            </motion.div>
          </Link>
        );
      } else {
        return (
          <Link
            className="self-center justify-self-center"
            to={path}
            key={index}
          >
            <div className="self-center justify-self-center ">
              <Icon className="mr-2 " size={size} />
            </div>
          </Link>
        );
      }
    });
  };

  return (
    <>
      <div className="mb-16   "></div>
      <div className="z-20  border-t-2 border-gray-100 fixed bottom-0 left-0 right-0 w-full bg-white text-gray-500  mx-auto py-2 px-4 grid grid-cols-4  ">
        {renderBottomNav()}
      </div>
    </>
  );
}

export default Footer;
