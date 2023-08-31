import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EngineeringIcon from '@mui/icons-material/Engineering';
import MailIcon from '@mui/icons-material/Mail';
import { Link, NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  {
    item: 'Products',
    id: 'categories',
    path: 'categories/all',
  },
  // {
  //   item: 'All Products',
  //   id: 'all-products',
  //   path: '/all',
  // },
];

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  // const scrollToSection = id => {
  //   let scrollToEl = document.getElementById(id).offsetTop;
  //   let scrollNumber = id === 'contact' ? 150 : 60;
  //   window.scrollTo({ top: scrollToEl - scrollNumber, behavior: 'smooth' });
  //   setActiveLink(id);
  // };

  return (
    <nav
      className={`w-full sticky top-0 left-0 right-0 px-3 py-4 bg-white shadow-lg z-50 max-w-full duration-200`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center space-x-3 sm:space-x-4">
        {/* Logo */}
        <div className="cursor-pointer">
          <Link to="" className="flex items-center space-x-2">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-8 sm:w-10 sm:hidden"
            />
            <h2 className="hidden sm:block text-orange-600 font-semibold text-xl sm:mt-[1px] sm:text-2xl sm:tracking-wide">
              Brandistic
            </h2>
          </Link>
        </div>

        {/* Desktop Nav */}
        {/* Search Bar */}
        <div className="relative flex-1 md:flex-[0.8]">
          <input
            type="text"
            placeholder="Search"
            className="border w-full border-gray-700 text-gray-700 outline-none rounded-full px-3 py-2 sm:px-4 hover:border-orange-600 focus:border-orange-600 duration-200 focus:shadow-md focus:bg-orange-50"
          />
        </div>

        {/* Nav Items */}
        {/* <div className="hidden sm:flex"> */}
        <ul className="hidden space-x-4 lg:space-x-12 md:flex items-center font-medium uppercase">
          {navItems.map(item => (
            <li
              key={item?.item}
              className="group flex flex-col items-center cursor-pointer"
            >
              <NavLink
                to={`/${item.path}`}
                className={navData =>
                  `group-hover:text-orange-600 ${
                    navData.isActive ? 'text-orange-600' : 'text-gray-700'
                  } transition-colors duration-200 text-base md:text-[17px]`
                }
              >
                {item?.item}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* </div> */}

        <button className="text-orange-600">
          <ShoppingCartIcon />
        </button>

        {/* Menu Icon */}
        <button
          className="text-orange-600 md:hidden"
          onClick={() => setShowMobileNav(true)}
        >
          <MenuIcon sx={{ fontSize: '2.2rem' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`w-full h-screen absolute inset-0 bg-orange-50 px-3 py-4 space-y-10 ${
          showMobileNav ? 'translate-x-[0]' : 'translate-x-[-100%] '
        } transition-all duration-500 ease-in-out`}
      >
        {/* Top Bar */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="cursor-pointer">
              <div onClick={() => setShowMobileNav(false)}>
                <Link to="" className="flex items-center space-x-2">
                  {/* <img src="images/logo.png" alt="logo" className="w-12" /> */}
                  <p className="text-orange-600 font-semibold text-xl tracking-wide">
                    Brandistic
                  </p>
                </Link>
              </div>
            </div>
            {/* Close Icon */}
            <button
              className="cursor-pointer text-gray-600 border border-gray-300 rounded-md"
              onClick={() => setShowMobileNav(false)}
            >
              <CloseIcon sx={{ fontSize: '2rem' }} />
            </button>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>

        {/* Nav Items */}
        <ul className="flex flex-col items-center font-medium tracking-wide space-y-10">
          {navItems.map(item => (
            <li
              key={item?.item}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setShowMobileNav(false)}
            >
              <NavLink
                to={`/${item.path}`}
                className={navData =>
                  `group-hover:text-orange-600 ${
                    navData.isActive ? 'text-orange-600' : 'text-gray-700'
                  } transition-colors duration-200 text-xl`
                }
                // className="transition-colors duration-200 text-xl text-gray-700"
              >
                {item?.item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
