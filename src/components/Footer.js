import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import Typography from './Typography';
import { useLocation } from 'react-router-dom';

const bottomNavigation = [
  { title: 'Home', icon: HiHome, size: 30, path: '/' },
  { title: 'Search', icon: FiSearch, size: 28, path: '/search/hghg' },
  { title: 'Profile', icon: FaUser, size: 25, path: '/profile' },
];

function Footer() {
  const location = useLocation();

  const renderBottomNav = () => {
    return bottomNavigation.map(({ icon: Icon, size, title, path }, index) => {
      if (location.pathname === path) {
        return (
          <Link
            className="self-center justify-self-center"
            to={path}
            key={index}
          >
            <div className="flex items-center justify-between bg-yellow-100 text-yellow-600 p-2 px-4  self-center justify-self-center rounded-md">
              <Icon className="mr-2 " size={size} />
              <Typography type="content">{title}</Typography>
            </div>
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
    <div className="fixed bottom-0 left-0 right-0 bg-white text-gray-500  h-14 mx-auto px-4 grid grid-cols-3  ">
      {renderBottomNav()}
    </div>
  );
}

export default Footer;
