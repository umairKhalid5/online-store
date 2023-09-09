import React, { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToShowFrom = 300;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToShowFrom) setIsVisible(true);
    else setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <button
      className={`${
        isVisible ? 'topBtn come-in' : 'topBtn go-out'
      } flex items-center justify-center rounded-full h-12 w-12 fixed shadow-lg shadow-gray-600/60 bg-gray-600 text-white duration-200`}
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
    >
      <ArrowUpwardIcon />
    </button>
  );
};

export default ScrollTopBtn;
