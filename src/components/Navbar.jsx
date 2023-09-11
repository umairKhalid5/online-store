import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { allMainProducts } from '../constants/constants';
import SuggestionsBox from './SuggestionsBox';
import { cartSliceActions } from '../store/cart-slice';
import SearchIcon from '@mui/icons-material/Search';

const navItems = [
  {
    item: 'Products',
    id: 'categories',
    path: 'categories/all',
  },
];

const mobileNavItems = [
  {
    item: 'Home',
    id: 'base-home',
    path: '',
  },
  {
    item: 'Products',
    id: 'categories',
    path: 'categories/all',
  },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchedItems, setSearchedItems] = useState(null);
  const [cartUpdated, setCartUpdated] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [showMobileNav, setShowMobileNav] = useState(false);

  const quantity = useSelector(state => state.cart.totalQuantity);
  const cartItems = useSelector(state => state.cart.items);

  useEffect(() => {
    if (cartItems.length === 0) return;
    setCartUpdated(true);

    const timer = setTimeout(() => setCartUpdated(false), 1000);

    return () => clearTimeout(timer);
  }, [cartItems]);

  useEffect(() => {
    if (!searchTerm.trim()) return;

    const product = allMainProducts[1]?.products?.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchedItems(product);
    setShowSuggestions(true);
  }, [searchTerm]);

  // Hide Suggestions Box
  useEffect(() => {
    const hideSuggestionBox = e => {
      if (!showSuggestions) return;

      if (
        e.target?.id !== 'search-container' &&
        !e.target?.closest('div')?.id !== 'search-container'
      )
        setShowSuggestions(false);
    };

    window.addEventListener('click', hideSuggestionBox);

    return () => {
      window.removeEventListener('click', hideSuggestionBox);
    };
  }, []);

  const searchHandler = e => setSearchTerm(e.target.value);

  const toggleCartHandler = () =>
    dispatch(cartSliceActions.toggleCartVisibility());

  const submitHandler = e => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    navigate(`/search/${searchTerm}`);
    setShowSuggestions(false);
    setSearchTerm('');
  };

  return (
    <nav
      className={`w-full sticky top-0 left-0 right-0 px-3 py-4 bg-white shadow-md z-50 max-w-full duration-200`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center space-x-3 sm:space-x-4">
        {/* Logo */}
        <div className="cursor-pointer">
          <Link to="/" className="flex items-center space-x-2">
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
        <div className="relative flex-1 md:flex-[0.8]" id="search-container">
          <form className="flex-1" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Search"
              className="border w-full border-orange-300 bg-orange-50 text-gray-700 outline-none rounded-xl px-3 py-2 sm:px-4 hover:border-orange-600 focus:border-orange-500 duration-200 focus:shadow-md focus:shadow-orange-600/10 focus:bg-blue-50"
              value={searchTerm}
              onChange={searchHandler}
            />
            <button className="absolute top-[50%] -translate-y-[50%] right-1 text-orange-600 cursor-pointer">
              <SearchIcon />
            </button>
          </form>

          {/* Suggestions Box */}
          {showSuggestions && searchTerm?.trim() && (
            <SuggestionsBox
              items={searchedItems}
              search={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          )}
        </div>

        {/* Nav Items */}
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

        {/* Cart Icon */}
        <button
          className={`text-orange-600 relative ${cartUpdated && 'bump'}`}
          onClick={toggleCartHandler}
        >
          <div className="absolute -top-3 -right-3 w-full h-full bg-black-100 text-orange-600 font-semibold text-sm">
            {quantity}
          </div>
          <ShoppingCartIcon sx={{ fontSize: '1.7rem' }} />
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
          showMobileNav ? 'translate-x-[0]' : 'translate-x-[-100%]'
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

        {/* Mobile Nav Items */}
        <ul className="flex flex-col items-center font-medium tracking-wide space-y-10">
          {mobileNavItems.map(item => (
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
