import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className="w-full bg-orange-600 py-14 text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 items-center">
        {/* Copy Rights */}
        <div className="text-white/80 text-center">
          © 2023
          <Link
            to="/"
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
              })
            }
            className="mx-1 font-medium text-lg text-white"
          >
            Brandisitic
          </Link>
          All Rights Reserved
        </div>

        {/* Socials */}
        <div className="space-x-3">
          <InstagramIcon sx={{ fontSize: '1.7rem' }} />
          <TwitterIcon sx={{ fontSize: '1.7rem' }} />
          <FacebookIcon sx={{ fontSize: '1.7rem' }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
